// import { readable } from 'svelte/store';
import emoji from 'emoji.json';

//make a store house instead

export const emojiHouse={};
for(let i=0;i<emoji.length;i++){
    if(!emojiHouse[`${emoji[i].group}`])
        emojiHouse[`${emoji[i].group}`]=[];
    emojiHouse[`${emoji[i].group}`]=[...emojiHouse[`${emoji[i].group}`],emoji[i]];
}