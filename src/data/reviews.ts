export interface Review {
    id: string;
    name: string;
    rating: 1 | 2 | 3 | 4 | 5;
    comment: string;
    source: "Google";
}

export const reviews: Review[] = [
    {
        id: "1",
        name: "Krishna",
        rating: 5,
        comment: "Gautham did the cutting and styling for my hair.he is amazing.he asked me what I want and suggested me good ideas to enhance my hairstyle.",
        source: "Google",
    }, {
        id: "2",
        name: "Narendran D",
        rating: 5,
        comment: "Literally a hidden gem in Ammachathiram, neat and hygiene place with affordable cost (₹150). Great place to cut your hair.",
        source: "Google",
    }, {
        id: "3",
        name: "Stark Kathir",
        rating: 5,
        comment: "I first visited G Cube Salon with my friends, and at that time, he was just a stranger and a barber to us.",
        source: "Google",
    }
];
