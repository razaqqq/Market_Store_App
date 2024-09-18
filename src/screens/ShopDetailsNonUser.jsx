import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Dimensions, Modal, Animated } from "react-native"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import ProductCardShopDetails from "../components/ProductCardShopDetail"
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';







const ShopDetailNonUser = ({ route }) => {


    const randomProductDummyData = [
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41bwcFdde+L.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41SxxZ2EdKL.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41STw9jczEL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41STw9jczEL.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41STw9jczEL.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41STw9jczEL.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://m.media-amazon.com/images/I/41STw9jczEL.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://i.redd.it/r6wkw7cve3pa1.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        },
        {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        }, {
            "name": "maid_1",
            "description": "Beutiful Maid Big Breast",
            "price": 999,
            "stock": 1,
            "images": [
                {
                    "public_id": "askjgdhjsadhgsahd2",
                    "url": "https://image.tensorartassets.com/posts/images/627546257530839391/016e235f-22f2-49ee-823e-3317616cc70c.jpg"
                }
            ],
            "category": "maid",
        },
    ]

    const categoryUserArray = [
        "FeaturedProduct", "TopSellestProduct", "DiscountedProduct", "LastestProduct", "AllProduct"
    ]

    const featuredProductArray = [
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/621052855389944746/d1604fb9-9e38-4536-a82d-850b48b52668.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99
        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/621052855389944746/d1604fb9-9e38-4536-a82d-850b48b52668.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/621052855389944746/d1604fb9-9e38-4536-a82d-850b48b52668.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/621052855389944746/d1604fb9-9e38-4536-a82d-850b48b52668.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
    ]

    const topSellestproduct = [
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/621052855389944746/cb8cdef6-4f93-4d30-8bba-d909e929a86d.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/621052855389944746/cb8cdef6-4f93-4d30-8bba-d909e929a86d.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/621052855389944746/cb8cdef6-4f93-4d30-8bba-d909e929a86d.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/621052855389944746/cb8cdef6-4f93-4d30-8bba-d909e929a86d.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/621052855389944746/cb8cdef6-4f93-4d30-8bba-d909e929a86d.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },

    ]

    const discountedProductArray = [
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-f344645668a2.jpeg",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
    ]



    const allProductArray = []

    allProductArray.push(...featuredProductArray)
    allProductArray.push(...topSellestproduct)
    allProductArray.push(...discountedProductArray)

    const lastestProductArray = allProductArray.reverse()

    const galleryImageArrays = [
        {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        },
        {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://img5.arthub.ai/user-uploads/61f1d6c73ab8bcb6fd816249362ec367b0ef5fb9/6168f6f8-034b-4a98-a667-25d1f6f143e1/ah3-60c8645668a2.jpeg"
            }
        }, {
            "id": "kjashdkjahssdkj2",
            "name": "maid",
            "description": "beutiful maid",
            "image": {
                "public_id": "kjsadhkjdhsakj1",
                "url": "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        },
    ]


    let dotSUm = 1



    const [category, setCategory] = useState(categoryUserArray[0])
    const [follow, setFollow] = useState(false)
    const [pageGallery, setPageGallery] = useState(1)
    const [slicedTemporaryArray, setSlicedTemporaryArray] = useState([])
    const [showImageVisible, setShowImageVisible] = useState(false)
    const [imageGalleryModel, setImageGalleryModel] = useState("")

    const [showDialogPopUp, setShowDialogPopUp] = useState(false)

    const [dialogPopUpTitle, setDialogPopUpTitle] = useState("This Is PopUp Title")
    const [dialogPopUpdescription, setDialogPopUpDescription] = useState("This is PopUp Descriptions")



    const changeImageGallery = ({ image }) => {
        setImageGalleryModel(image)
    }


    const showDialogPopUpMethod = () => {
        setShowDialogPopUp(true)
    }
    const hideDialogPopUpMethod = () => {
        setShowDialogPopUp(false)
    }
    const changePopUpTitle = ({ title }) => {
        setDialogPopUpTitle(title)
    }
    const chnagePopUpDescription = ({ description }) => {
        setDialogPopUpDescription(description)
    }

    const hideShowImageVisible = () => setShowImageVisible(false)
    const showShowImageVisible = ({ image }) => {

        console.log(`showShowImageVisible image = ${image}`)

        setShowImageVisible(true)
        setImageGalleryModel(image)

    }



    const categoryButtonHandler = (categorys) => {
        setCategory(categorys)
    }

    const dotSumFunc = () => {
        const galleryImageSum = galleryImageArrays.length
        const tempSumImageInOnePage = 9

        dotSUm = Math.round(galleryImageSum / tempSumImageInOnePage)

    }

    const nexPage = () => {
        console.log("next page Called")
        console.log(`page gallery ${pageGallery}`)
        let prevValue = pageGallery
        setPageGallery(prevValue + 1)

        let lowValue = pageGallery * 10
        let endValue = lowValue + 9

        setSlicedTemporaryArray(galleryImageArrays.slice(lowValue, endValue))


    }

    const prevPage = () => {
        console.log(`Prev Page Method is Called`)
        let prevValue = pageGallery

        if (prevValue < 1 || prevValue === 1) {
            console.log("Out Of Bound")
            setPageGallery(prevValue)

            setSlicedTemporaryArray(galleryImageArrays.slice(0, 9))

        }
        else {
            setPageGallery(prevValue - 1)

            let lowValue = (prevValue - 1) * 10
            let endValue = lowValue + 9



            setSlicedTemporaryArray(galleryImageArrays.slice(lowValue, endValue))


        }




    }

    console.log("Shop Details By Non User Log Section")
    console.log("User By Id Logging = ")

    const userById = route.params.userByIdTemp



    const navigate = useNavigation()

    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    function renderItem({ item, index }) {
        return (
            <ProductCardShopDetails
                category={item.category}
                description={item.description}
                discount={10}
                height={(height * 1 / 2.5 - 30)}
                image={item.images[0].url}
                index={index}
                price={item.price}
                title={item.name}
                width={(width * 1 / 2.5)}
            />
        )
    }

    function renderItemVer2({ item, index }) {
        return <ProductCardShopDetails
            description={item.description}
            discount={item.discount}
            height={(height * 1 / 2.5 - 30)}
            image={item.image}
            index={index}
            price={item.price}
            title={item.title}
            category={"MAID"}
            width={(width * 1 / 2.5)}
        />
    }

    function renderItemGalleryImage({ item, index }) {
        console.log(`renderItemGalleryImage ${item.image.url}`)

        return (
            <TouchableOpacity
                onPress={() => showShowImageVisible({ image: item.image.url })}
                style={{
                    width: "auto",
                    height: "auto",
                    marginVertical: 3,
                    marginHorizontal: 3
                }}

            >
                <Image
                    source={{
                        uri: item.image.url
                    }}
                    resizeMode="cover"
                    style={{
                        width: (width / 3 - 25),
                        height: 270 / 3 - 10,
                        borderRadius: 10,
                    }}
                />
            </TouchableOpacity>
        )
    }

    const follows = () => {
        if (follow === false) {

            setFollow(true)
        }
        else {
            showDialogPopUpMethod()

        }
    }

    const unFollowMethods = () => {
        hideDialogPopUpMethod()
        setFollow(false)
    }

    console.log(userById)


    dotSumFunc()


    useEffect(() => {
        setSlicedTemporaryArray(galleryImageArrays.slice(0, 9))
    }, [])


    return (




        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center"
            }}
        >
            <ScrollView
                horizontal={false}
            >
                <View
                    style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: colors.color7,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignSelf: "center",
                        paddingTop: 30,
                        paddingHorizontal: 10,

                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigate.goBack()}
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            position: "absolute",
                            left: 20,
                            top: 30,
                            bottom: 0
                        }}
                    >
                        <Avatar.Icon
                            icon={"step-backward-2"}
                            color={colors.color2}
                            size={50}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            flex: 1
                        }}
                    >
                        <Text
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                textAlign: "left",
                                fontSize: 20,
                                fontWeight: "bold",
                                fontStyle: "italic",
                                color: colors.color2
                            }}
                        >
                            {userById.name} Details
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 30,
                            bottom: 0,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                        onPress={() => console.log("More Clicked")}
                    >
                        <Avatar.Icon
                            icon={"dots-vertical"}
                            color={colors.color2}
                            size={50}
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 300
                    }}
                >

                    <Image
                        source={{
                            uri: "https://w.wallhaven.cc/full/r2/wallhaven-r2k8gm.jpg"
                        }} style={{
                            width: "100%",
                            height: "100%",

                        }} />

                    <View
                        style={{
                            position: "absolute",
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            borderWidth: 3,
                            borderColor: colors.color2,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <Image source={{
                            uri: userById.avatar.url,


                        }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 80
                            }}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Gallery Section */}
                <View
                    style={{
                        width: "100%",
                        // height: height * 1 / 3,
                        height: 1000,
                        paddingHorizontal: 30,
                        paddingVertical: 30,
                        flexWrap: "wrap",

                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        marginTop: 30,
                        marginBottom: 40,
                    }}
                >

                    <FlatList
                        data={slicedTemporaryArray}
                        renderItem={renderItemGalleryImage}
                        numColumns={3}
                        key={3}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            marginHorizontal: 30,

                        }}
                    />
                    <TouchableOpacity
                        onPress={() => nexPage()}
                        style={{
                            position: "absolute",
                            right: 5,
                            top: 0,
                            bottom: 0,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"page-next"}
                            size={50}
                            color={colors.color1}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => prevPage()}
                        style={{
                            position: "absolute",
                            left: 5,
                            top: 0,
                            bottom: 0,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"page-previous"}
                            size={50}
                            color={colors.color1}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        />
                    </TouchableOpacity>

                    <View
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: 50,

                            bottom: -40,

                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            zIndex: 30
                        }}
                    >
                        <Text

                            style={{
                                textAlign: "center",
                                fontSize: 30
                            }}>
                            Gallery {pageGallery}
                        </Text>
                    </View>

                </View>
                {/* Gallery Section */}

                <View
                    style={{

                        width: "auto",
                        height: "auto",
                        marginVertical: 30,
                        marginHorizontal: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        flexDirection: "column",
                        backgroundColor: colors.color2,

                    }}
                >




                    <View
                        style={{
                            width: "100%",
                            height: 30,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                fontWeight: "bold",
                                fontSize: 20
                            }}
                        >Shop Details Informations</Text>
                    </View>


                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 10
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >Shop Name </Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: {userById.name}</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >Shop Description</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia posuere blandit. Nulla tempor eleifend pharetra. Quisque fringilla finibus porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut auctor, nibh id ultrices consequat, magna metus sagittis ligula, et faucibus sapien ex non ante. Aliquam auctor, justo et porta feugiat, elit nisl commodo enim, vitae sollicitudin nulla risus a metus. Aliquam erat volutpat. Pellentesque bibendum diam nibh, in pretium libero fringilla fermentum. Curabitur et est ut tortor pulvinar porta ultricies quis tellus.</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >Email</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: {userById.email}</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >Country</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: {userById.country}</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >City</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: {userById.city}</Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "space-between",
                            alignContent: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                flex: 2
                            }}
                        >Address</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                flex: 3,
                                textAlign: "left"
                            }}
                        >: {userById.address}</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginVertical: 30,

                        width: "100%",
                        height: "auto",
                        backgroundColor: colors.color2,
                        paddingVertical: 30
                    }}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            width: "100%",
                            height: 40,

                        }}
                    >
                        <View
                            style={{
                                width: "auto",
                                height: "100%",
                                flexDirection: "row",
                                marginHorizontal: 20
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: "auto",
                                    height: 40,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    paddingHorizontal: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 10
                                }}
                                onPress={() => categoryButtonHandler(categoryUserArray[0])}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: colors.color2
                                    }}
                                >Featured Product</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "auto",
                                    height: 40,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    paddingHorizontal: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 10
                                }}
                                onPress={() => categoryButtonHandler(categoryUserArray[1])}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: colors.color2
                                    }}
                                >TopSellest Product</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "auto",
                                    height: 40,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    paddingHorizontal: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 10
                                }}
                                onPress={() => categoryButtonHandler(categoryUserArray[2])}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: colors.color2
                                    }}
                                >Discounted Product</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "auto",
                                    height: 40,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    paddingHorizontal: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 10
                                }}
                                onPress={() => categoryButtonHandler(categoryUserArray[3])}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: colors.color2
                                    }}
                                >Lastest Product</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "auto",
                                    height: 40,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    paddingHorizontal: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 10
                                }}
                                onPress={() => categoryButtonHandler(categoryUserArray[4])}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: colors.color2
                                    }}
                                >All Product</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                    <View
                        style={{
                            width: "auto",
                            height: "auto",
                            marginHorizontal: 30,
                            marginTop: 20,

                        }}
                    >
                        {
                            category === categoryUserArray[0] && (
                                <FlatList
                                    data={featuredProductArray}
                                    renderItem={renderItemVer2}
                                    numColumns={2}

                                    key={2}
                                />
                            )
                        }


                        {
                            category === categoryUserArray[1] && (

                                <FlatList
                                    data={topSellestproduct}
                                    renderItem={renderItemVer2}
                                    numColumns={2} key={2}
                                />

                            )
                        }
                        {

                            category === categoryUserArray[2] && (

                                <FlatList
                                    data={discountedProductArray}
                                    renderItem={renderItemVer2}
                                    numColumns={2} key={2}
                                />

                            )
                        }
                        {
                            category === categoryUserArray[3] && (

                                <FlatList
                                    data={lastestProductArray}
                                    renderItem={renderItemVer2}
                                    numColumns={2} key={2}
                                />

                            )
                        }
                        {
                            category === categoryUserArray[4] && (

                                <FlatList
                                    data={allProductArray}
                                    renderItem={renderItemVer2}
                                    numColumns={2} key={2}
                                />


                            )
                        }
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 30,
                        marginBottom: 100,
                        marginHorizontal: 30,
                        width: "auto",
                        height: "auto",
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "flex-start",
                                fontSize: 24,
                                fontWeight: "bold",
                                fontStyle: "italic",
                                marginBottom: 10
                            }}
                        >
                            You May Like
                        </Text>
                    </View>
                    <FlatList
                        data={randomProductDummyData}
                        renderItem={renderItem}
                        numColumns={2} key={2}
                    />
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    backgroundColor: colors.color1,
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center"
                }}
            >
                {
                    follow === false ? (
                        <TouchableOpacity
                            onPress={follows}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    height: "80%",
                                    width: 320,
                                    borderRadius: 1,
                                    borderColor: colors.color2,

                                    borderWidth: 1,
                                    borderRadius: 80,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        color: colors.color2,
                                        fontWeight: "bold",
                                        fontSize: 20
                                    }}
                                >FOLLOW</Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={follows}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    height: "80%",
                                    width: 320,
                                    borderRadius: 1,
                                    borderColor: colors.color2,

                                    borderWidth: 1,
                                    borderRadius: 80,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: colors.color7
                                }}
                            >
                                <Text
                                    style={{
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        color: colors.color2,
                                        fontWeight: "bold",
                                        fontSize: 20
                                    }}
                                >UNFOLLOW</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>

            <Modal
                visible={showImageVisible}
                onRequestClose={hideShowImageVisible}
                animationType="fade"
                transparent
            >



                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: "80%",
                            height: "70%",

                            paddingHorizontal: 10,
                            backgroundColor: colors.color2,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                width: 50,
                                height: 50,
                                right: 10,
                                top: 10,
                                zIndex: 20
                            }}
                            onPress={hideShowImageVisible}
                        >
                            <Avatar.Icon
                                icon={"close"}
                                color={colors.color2}
                                size={50}
                                style={{
                                    backgroundColor: colors.color1
                                }}
                            />
                        </TouchableOpacity>

                        <ReactNativeZoomableView
                            maxZoom={1.5}
                            minZoom={1}
                            zoomStep={0.5}
                            initialZoom={1}
                            bindToBorders={true}
                            onZoomAfter={this.logOutZoomState}
                            captureEvent={true}

                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                            >


                                <Image
                                    source={{
                                        uri: imageGalleryModel
                                    }}
                                    resizeMode="cover"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 10,
                                    }}
                                />



                            </View>
                        </ReactNativeZoomableView>



                    </View>
                </View>
            </Modal>

            <Modal
                visible={showDialogPopUp}
                onRequestClose={hideDialogPopUpMethod}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: "70%",
                            height: "30%",
                            borderRadius: 30,
                            paddingHorizontal: 10,
                            backgroundColor: colors.color2,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <View
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 80,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: colors.color1,
                                    width: "70%",
                                    textAlign: "center",

                                }}
                            >{dialogPopUpTitle}</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                width: 50,
                                height: 50
                            }}
                            onPress={hideDialogPopUpMethod}
                        >
                            <Avatar.Icon
                                size={50}
                                icon={"close"}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                                color={colors.color1}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 40,
                                bottom: 0,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    height: "50%",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: "40%",
                                        height: "50%",
                                        borderRadius: 30,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        backgroundColor: colors.color2,
                                        borderWidth: 2,
                                        borderColor: colors.color1
                                    }}
                                    onPress={hideDialogPopUpMethod}
                                >
                                    <Text
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center",
                                            fontSize: 24,
                                            fontWeight: "bold",
                                            color: colors.color3
                                        }}
                                    >Cancel</Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        width: 10
                                    }}
                                ></View>
                                <TouchableOpacity
                                    style={{
                                        width: "40%",
                                        height: "50%",
                                        borderRadius: 30,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        backgroundColor: colors.color1,
                                        borderWidth: 2,
                                        borderColor: colors.color2
                                    }}
                                    onPress={unFollowMethods}
                                >
                                    <Text
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center",
                                            fontSize: 24,
                                            fontWeight: "bold",
                                            color: colors.color2
                                        }}
                                    >Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: 10,
                                right: 10
                            }}
                            onPress={() => console.log("Help is Clicked")}
                        >
                            <Avatar.Icon
                                icon={"account-question"}
                                size={50}
                                color={colors.color1}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )

}

export default ShopDetailNonUser