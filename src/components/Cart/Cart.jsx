import { useEffect, useState } from "react";
import { Typography, Button, Link, Container, Stack, Card, CardMedia, CardContent, Box, colors } from "@mui/material";
import cartService from "../../services/cart.service";
import { useAuthContext } from "../../context/auth.context";
import { toast } from "react-toastify";
import orderService from "../../services/order.service";
import { useCartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Cart = () => {
  const authContext = useAuthContext();
  const cartContext = useCartContext();
  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const getTotalPrice = (itemList) => {
    let totalPrice = 0;
    itemList.forEach((item) => {
      const itemPrice = item.quantity * parseInt(item.book.price);
      totalPrice = totalPrice + itemPrice;
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    setCartList(cartContext.cartData);
    setItemsInCart(cartContext.cartData.length);
    getTotalPrice(cartContext.cartData);
  }, [cartContext.cartData]);

  const removeItem = async (id) => {
    try {
      const res = await cartService.removeItem(id);
      if (res) {
        cartContext.updateCart();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const updateQuantity = async (cartItem, inc) => {
    const currentCount = cartItem.quantity;
    const quantity = inc ? currentCount + 1 : currentCount - 1;
    if (quantity === 0) {
      toast.error("Item quantity should not be zero");
      return;
    }

    try {
      const res = await cartService.updateItem({
        id: cartItem.id,
        userId: cartItem.userId,
        bookId: cartItem.book.id,
        quantity,
      });
      if (res) {
        const updatedCartList = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, quantity } : item
        );
        cartContext.updateCart(updatedCartList);
        const updatedPrice =
          totalPrice +
          (inc
            ? parseInt(cartItem.book.price)
            : -parseInt(cartItem.book.price));
        setTotalPrice(updatedPrice);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const placeOrder = async () => {
    if (authContext.user.id) {
      const userCart = await cartService.getList(authContext.user.id);
      if (userCart.length) {
        try {
          let cartIds = userCart.map((element) => element.id);
          const newOrder = {
            userId: authContext.user.id,
            cartIds,
          };
          const res = await orderService.placeOrder(newOrder);
          if (res) {
            cartContext.updateCart();
            navigate("/");
            toast.success("Your order is successfully placed");
          }
        } catch (error) {
          toast.error(`Order cannot be placed ${error}`);
        }
      } else {
        toast.error("Your cart is empty");
      }
    }
  };
  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#414141" }}>Cart page</Typography>
      <Stack
        display={"flex"}
        alignItems={"center"}
        direction={"row"}
        justifyContent={"center"}
        spacing={35}
        marginTop={"23px"}
      >
        <Typography variant="h6" sx={{ color: "#414141" }}>
          My Shopping Bag ({itemsInCart} Items)
        </Typography>
        <Typography variant="h6" sx={{ color: "#414141", float: "left" }}>
          Total price: {totalPrice}
        </Typography>
      </Stack>
      <Container sx={{ width: "60%", alignItems: "center", flexDirection: "column", marginTop: "7px" }}>
        {cartList.map((cartItem) => {
          return (
            <Card sx={{ display: "flex", marginTop: "7px" }} key={cartItem.id}>
              <CardMedia sx={{ width: "100px", height: "150px", overflow: "hidden" }}
                image={cartItem.book.base64image}
                title={cartItem.book.name}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", width: "500px" }}>
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#414141", fontSize: 17 }}
                >
                  {cartItem.book.name}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ color: "#F15B6F" }}
                >
                  Cart item name
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#414141", fontSize: 17, marginLeft: "auto" }}
                >
                  MRP &#8377; {cartItem.book.price}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row" }}>

                  <Typography sx={{
                    width: "23px",
                    height: "20px",
                    backgroundColor: "#f14d54",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "white",
                    paddingBottom: "2px",
                    borderRadius: "2px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                    onClick={() => updateQuantity(cartItem, true)}

                  >+</Typography>
                  <Typography style={{
                    textAlign: "center",
                    width: "21px",
                    height: "21px",
                    margin: "0 10px",
                    border: "1px solid #CCCCCC"
                  }}>{cartItem.quantity}</Typography>
                  <Typography sx={{
                    width: "23px",
                    height: "20px",
                    backgroundColor: "#f14d54",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "white",
                    paddingBottom: "2px",
                    borderRadius: "2px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                    onClick={() => updateQuantity(cartItem, false)}

                  >-</Typography>
                 
                    {/* <Typography gutterBottom sx={{ fontSize: "14px" }}>Qty :{cartItem.quantity}</Typography> */}
                  

                  <Typography sx={{ marginLeft: "auto" }}>

                    <Link sx={{ cursor: "pointer", color: "#F15B6F", textDecoration: "none" }} onClick={() => removeItem(cartItem.id)}>Remove</Link>

                  </Typography>


                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Container>
      <Button sx={{
        backgroundColor: "#f14d54",
        borderRadius: "2px",
        marginTop: "14px",
        color: "white",
        "&:hover": {
          backgroundColor: "#f14d54",
          color: 'white'
        }
      }}
        onClick={placeOrder}>
        Place order
      </Button>
    </Container >
  )
}