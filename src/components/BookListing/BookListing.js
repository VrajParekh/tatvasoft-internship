import {
    Typography,
    Pagination,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    ImageList,
    Container,
    Stack,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from "@mui/material"
import { useAuthContext } from "../../context/auth.context"
import { useEffect, useState, useMemo } from "react";
import { defaultFilter } from "../../constants/constant";
import categoryService from "../../services/category.service";
import bookService from "../../services/book.service";
// import bookListingStyles from "./BookListing.module.css"

export const BookListing = () => {
    const authContext = useAuthContext();
    // const materialClasses = materialCommonStyles();
    const [bookResponse, setBookResponse] = useState({
        pageIndex: 0,
        pageSize: 10,
        totalPages: 1,
        items: [],
        totalItems: 0,
    });
    const [categories, setCatogries] = useState([]);
    const [sortBy, setSortBy] = useState();
    const [filters, setFilters] = useState(defaultFilter);

    useEffect(() => {

    });
    useEffect(() => {
        getAllCategories();
        const timer = setTimeout(() => {
            if (filters.keyword === "") delete filters.keyword;
            searchAllBooks({ ...filters });
        }, 500);
        return () => clearTimeout(timer);
    }, [filters]);

    const searchAllBooks = (filters) => {
        bookService.getAll(filters).then((res) => {
            setBookResponse(res);
        });
    };
    const getAllCategories = async () => {
        await categoryService.getAll().then((res) => {
            if (res) {
                setCatogries(res);
            }
        });
    };

    const books = useMemo(() => {
        const bookList = [...bookResponse.items];
        if (bookList) {
            bookList.forEach((element) => {
                element.category = categories.find(
                    (a) => a.id === element.categoryId
                )?.name;
            });
            return bookList;
        }
        return [];
    }, [categories, bookResponse]);

    const sortBooks = (e) => {
        setSortBy(e.target.value);
        const bookList = [...bookResponse.items];
        bookList.sort((a, b) => {
            if (a.name < b.name) {
                return e.target.value === "a-z" ? -1 : 1;
            }
            if (a.name > b.name) {
                return e.target.value === "a-z" ? 1 : -1;
            }
            return 0;
        });
        setBookResponse({ ...bookResponse, items: bookList });
    };
    const truncateWords = (sentence, amount, tail) => {
        const words = sentence.split(' ');

        if (amount >= words.length) {
            return sentence;
        }

        const truncated = words.slice(0, amount);
        return `${truncated.join(' ')}${tail}`;
    }


    return (
        <Container>

            <Typography sx={{ fontSize: "34px", fontWeight: "bold", color: "#414141", textAlign: "center" }}>
                Book Listing
            </Typography>


            <Stack
                display={"flex"}
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                spacing={3}
                marginTop={"23px"}
            >
                <Typography sx={{ fontSize: "17px", fontWeight: "bold", color: "#414141" }}>
                    Total - {bookResponse.totalItems} items
                </Typography>

                <TextField
                    sx={{
                        width: "34%"
                    }}
                    placeholder="Search..."
                    size="small"
                    onChange={(e) => {
                        setFilters({
                            ...filters,
                            keyword: e.target.value,
                            pageIndex: 1
                        });
                    }}
                />



                <FormControl sx={{ float: "left", width: "25%" }}>
                    <InputLabel sx={{ lineHeight: "12px" }}>Sort By</InputLabel>
                    <Select
                        size="small"
                        onChange={sortBooks}
                        value={sortBy}
                        label="Sort By"
                    >
                        <MenuItem value="a-z">a-z</MenuItem>
                        <MenuItem value="z-a">z-a</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Container>
                <ImageList
                    gap={12}
                    sx={{
                        mb: 12,
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(265px, 1fr))!important',
                    }}
                >
                    {books.map((book, index) => (
                        <Card sx={{ maxWidth: 345, marginTop: "34px" }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image={book.base64image}
                                title={book.name}
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ fontSize: "20px", fontWeight: "bold" }}>
                                    {book.name}
                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: "18px" }}>
                                    {book.category}
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "gray", height: "85px" }}>

                                    {

                                        truncateWords(book.description, 15, '...')

                                    }

                                </Typography>
                                <Typography gutterBottom sx={{ fontSize: "22px" }}>
                                    MRP ₹ {book.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="large"
                                    variant="contained"
                                    sx={{
                                        width: "100%",
                                        backgroundColor: "#f14d54",
                                        fontWeight: "bold",
                                        '&:hover': {
                                            backgroundColor: "#FF101B",
                                        }
                                    }}>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    ))}
                </ImageList>
            </Container>

            <Pagination
                count={bookResponse.totalPages}
                page={filters.pageIndex}
                onChange={(e, newPage) => {
                    setFilters({ ...filters, pageIndex: newPage });
                }}
                sx={{ display: "flex", justifyContent: "center" }}
            />
        </Container>
    )
}