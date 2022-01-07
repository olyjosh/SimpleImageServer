
(async () => {
    // fetch from both folder
    const fs = require('fs');

    const temp = { 
        "dna": "1011000100", 
        "name": "#1",
        "description": 
        "This is an NFT made by the coolest generative code.",
        "image": "http://localhost:8081/1.png", 
        "edition": 1, "date": 1631360480297,
        "attributes": [{ "trait_type": "Background", "value": "Orange" }, { "trait_type": "Suit", "value": "Regular" }, { "trait_type": "Shoulder", "value": "USA" }, { "trait_type": "Pin", "value": "LunaBluePin" }, { "trait_type": "Race", "value": "Skull" }, { "trait_type": "Facial hair", "value": "No facial hair" }, { "trait_type": "Mask", "value": "No mask" }, { "trait_type": "Hair", "value": "Pink" }, { "trait_type": "Accessories", "value": "No accessories" }, { "trait_type": "Headwear", "value": "Glass dome" }] 
    }

    for (let i = 1; i <= 1000; i++) {
        temp.name = i%2==0 ? "Pirate #" + i : "Bounty Hunter #" + i;
        temp.image = 'https://oyinft.herokuapp.com/'+i+'.png'
        await fs.writeFileSync(i + '.json', JSON.stringify(temp))

        // copy 
        await fs.copyFileSync('1.png', i + '.png')
    }

    // await fs.writeFileSync(outFolder+'pirate-indices.json', fileMeta(false, i, meta))

    // async function randHunter(i) {
    //     const idx = Math.floor(Math.random() * hunterFiles.length);
    //     const file = hunterFiles[idx];
    //     const name = file.substr(0, file.indexOf('.'))
    //     console.log('...writing Pirate', i)
    //     const meta = await fs.readFileSync(hunterPath+'json/'+name+'.json', 'utf8')
    //     await fs.writeFileSync(outFolder+'meta/'+i+'.json', fileMeta(false, i, meta))
    //     await fs.copyFileSync(hunterPath+'images/'+name+'.png', outFolder+'images/'+i+'.png')
    //     hunterFiles.splice(idx, 1);
    // }

    // async function randPirate(i) {
    //     const idx = Math.floor(Math.random() * pirateFiles.length);
    //     const file = pirateFiles[idx];
    //     console.log('...writing Hunter',file, i)
    //     const name = file.substr(0, file.indexOf('.'))
    //     const meta = await fs.readFileSync(piratePath+'json/'+name+'.json', 'utf8')

    //     pirateIndices.push(i)
    //     await fs.writeFileSync(outFolder+'meta/'+i+'.json', fileMeta(true, i, meta))
    //     await fs.copyFileSync(piratePath+'images/'+name+'.png', outFolder+'images/'+i+'.png')
    //     pirateFiles.splice(idx, 1);

    // }

    // function fileMeta(isPirate, tokenNo, meta){

    //     const newMeta = JSON.parse(meta)
    //     newMeta.name = isPirate? 'Pirate #'+tokenNo : 'Bounty Hunter #'+tokenNo;
    //     newMeta.description = 'Pirate Hunters is a collection of 30,000 NFTs where Pirates and Bounty Hunter’s fight for $BOOTY, a token with endless utility. Pirate Hunters adds an element of the typical RPG to the novel idea of Tokenomics and risk protocol within a fully decentralized platform, using interactions between ERC-20 and ERC-721 tokens to create a compelling game of chicken between the Pirates and the Bounty Hunters.';
    //     // console.log(newMeta.attributes)

    //     if(isPirate){
    //         newMeta.attributes.push({
    //             "trait_type": "type",
    //             "value": "Pirate"
    //         });
    //     }else{
    //         newMeta.attributes.push({
    //             "trait_type": "type",
    //             "value": "Bounty Hunter"
    //         });
    //     }
    //     return JSON.stringify(newMeta);
    // }

    // throw random number till each count of pirate and hunters is 5000

    // store index of pirate as we roll random
})()