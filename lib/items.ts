export type itemToSellType = {
    slug: string;
    name: string;
    price: number;
    description?: string;
    image: string;
}

/// Array with the Items to sell of @type itemToSell.
export const itemsToSell: itemToSellType[] = [
    {
        slug: 'the-unicorn',
        name: 'The Unicorn',
        description: 'They exist!',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/88130364.jpeg',
    },
    {
        slug: 'the-fashionista',
        name: 'The Fashionista',
        description: `You know he's got his own personal stylist.`,
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/1023621232.jpeg',
    },
    {
        slug: 'the-drooler',
        name: 'The Drooler',
        description: 'Look at that crazy and cute face!',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/1934976130.jpeg',
    },
    {
        slug: 'the-player',
        name: 'The Player',
        description: 'Catch this sticker today!',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/2838199698.jpeg',
    },
    {
        slug: 'scaredy-dog',
        name: 'Scaredy Dog',
        description: 'No surprise courage and him are best friends.',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/513851757.jpeg',
    },
    {
        slug: 'the-pee-er',
        name: 'The Pee-er',
        description: 'Public enemy No. 1',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/3451550661.jpeg',
    },
    {
        slug: 'the-brawl',
        name: 'The Brawl',
        description: `Let's just say a lot of bones were broken...and chewed on.`,
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/3726783361.jpeg',
    },
    {
        slug: 'tip-toe-pub',
        name: 'Tip Toe Pub',
        description: 'So sneaky...',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/2723354392.jpeg',
    },
    {
        slug: 'dog-bath',
        name: 'Dog Bath',
        description: 'Scrub em clean!',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/198069951.jpeg',
    },
    {
        slug: 'tongue-wagger',
        name: 'Tongue Wagger',
        description: 'Tis a slobby one',
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/1415153921.jpeg',
    },
    {
        slug: 'angry-dog',
        name: 'Angry Dog',
        description: `Isn't he cute when he's angry?`,
        price: 9.99,
        image: 'https://ext.same-assets.com/830637805/899728653.jpeg',
    }
];