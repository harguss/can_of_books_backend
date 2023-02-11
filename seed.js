'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/books.js');

async function seed () {
    // title: 
    // description:
    // status:

    await Books.create({
        title: 'White Noise',
        description: 'Winner of the National Book Award, White Noise tells the story of Jack Gladney; his fourth wife, Babette; and four ultramodern offspring as they navigate the rocky passages of family life to the background babble of brand-name consumerism.',
        status: true,
    });

    await Books.create({
        title: 'On the Road',
        description: 'Few novels have had as profound an impact on American culture as On the Road. Pulsating with the rhythms of 1950s underground America, jazz, sex, illicit drugs, and the mystery and promise of the open road, Kerouac’s classic novel of freedom and longing defined what it meant to be “beat” and has inspired generations of writers, musicians, artists, poets, and seekers who cite their discovery of the book as the event that “set them free”. Based on Kerouac’s adventures with Neal Cassady, On the Road tells the story of two friends whose four cross-country road trips are a quest for meaning and true experience. Written with a mixture of sad-eyed naïveté and wild abandon, and imbued with Kerouac’s love of America, his compassion for humanity, and his sense of language as jazz, On the Road is the quintessential American vision of freedom and hope, a book that changed American literature and changed anyone who has ever picked it up. This edition commemorates the fiftieth anniversary of the first publication of the novel in 1957 and will be a must-have for any literature lover.',
        status: true,
    });

    await Books.create({
        title: 'Commodify your Dissent',
        description: 'In the "old" Gilded Age, the barons of business accumulated vast wealth and influence from their railroads, steel mills, and banks. But today it is culture that stands at the heart of the American enterprise, mass entertainment the economic dynamo that brings the public into the consuming fold and consolidates the power of business over the American mind. For a decade The Baffler has been the invigorating voice of dissent against these developments, in the grand tradition of the muckrakers and The American Mercury. This collection gathers the best of its writing to explore such peculiar developments as the birth of the rebel hero as consumer in the pages of Wired and Details; the ever-accelerating race to market youth culture; the rise of new business gurus like Tom Peters and the fad for Hobbesian corporate "reengineering"; and the encroachment of advertising and commercial enterprise into every last nook and cranny of American life. With its liberating attitude and cant-free intelligence, this book is a powerful polemic against the designs of the culture business on us all.',
        status: true,
    });
    console.log('books created');
    mongoose.disconnect();

}
console.log('closing seed file');
 seed();