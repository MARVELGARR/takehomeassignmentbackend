import { Request, Response } from "express";

type PropertyType = "House" | "Condo" | "Apartment" | "Land" | "Other"; // Add more as needed

type Property = {
    id: number;
    name: string;
    address: string;
    price: string;
    propertyType: PropertyType;
    imageUrl: string;
};

export const properties: Property[] = [
    {
        id: 1,
        name: "Luxury Condo",
        address: "123 Main St, Toronto",
        price: "$500,000",
        propertyType: "Condo",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 2,
        name: "Modern House",
        address: "456 Oak St, Vancouver",
        price: "$1,200,000",
        propertyType: "House",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 3,
        name: "Cozy Apartment",
        address: "789 Pine St, Montreal",
        price: "$300,000",
        propertyType: "Apartment",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 4,
        name: "Beachfront Villa",
        address: "1 Ocean Drive, Miami",
        price: "$2,500,000",
        propertyType: "Apartment",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 5,
        name: "Rustic Cottage",
        address: "50 Maple Rd, Aspen",
        price: "$800,000",
        propertyType: "House",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 6,
        name: "Penthouse Suite",
        address: "101 Highrise Blvd, New York",
        price: "$5,000,000",
        propertyType: "Other",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    },
    {
        id: 7,
        name: "Suburban Home",
        address: "202 Elm St, Chicago",
        price: "$450,000",
        propertyType: "House",
        imageUrl: "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg",
    }
];

// controllers/propertyController.js

export const getProperties = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: properties,
        });
    } catch (error) {
        console.error("Error fetching properties:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

