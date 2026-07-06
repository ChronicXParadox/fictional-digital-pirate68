const prefixes = [
"Shadow","Dark","Silent","Rapid","Lucky","Frozen","Inferno","Nova",
"Alpha","Omega","Pixel","Cyber","Crimson","Silver","Golden","Ghost",
"Swift","Toxic","Mystic","Storm","Thunder","Iron","Neon","Solar",
"Lunar","Venom","Hyper","Turbo","Crystal","Echo","Blaze","Frost",
"Night","Void","Dragon","Wolf","Falcon","Titan","Comet","Glitch",
"Quantum","Vortex","Atomic","Phantom","Legend","Orbit","Spirit","Steel",
"Chaos","Flame"
];

const middles = [
"a","e","i","o","u",
"an","en","in","or","ar",
"ix","ox","ul","er","al",
"ra","ri","ro","ta","to",
"li","lo","ni","na","za","zi"
];

const suffixes = [
"on","ix","or","ar","us","ius","ion","ic",
"ify","oid","er","ex","is","ax","yx","ox",
"en","al","ous","or","ite","zen","rix","core",
"byte","fy","gon","ron","mark","void","wave",
"bolt","storm","nova","flare","crest","spire"
];

const result = document.getElementById("result");

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function generateWord(min,max){

    while(true){

        let word =
            random(prefixes)+
            random(middles)+
            random(suffixes);

        word = word.replace(/[^A-Za-z]/g,"");

        if(word.length>=min && word.length<=max){
            return capitalize(word);
        }

    }

}

function randomNumbers(length){

    let nums="";

    for(let i=0;i<length;i++){
        nums += Math.floor(Math.random()*10);
    }

    return nums;

}

document.getElementById("generate").onclick=function(){

    const min=parseInt(document.getElementById("minLength").value);
    const max=parseInt(document.getElementById("maxLength").value);

    let username=generateWord(min,max);

    if(document.getElementById("numbers").checked){

        username+=randomNumbers(
            parseInt(document.getElementById("numLength").value)
        );

    }

    result.textContent=username;

};

document.getElementById("copy").onclick=()=>{

    navigator.clipboard.writeText(result.textContent);

    const btn=document.getElementById("copy");

    btn.textContent="Copied!";

    setTimeout(()=>{
        btn.textContent="Copy";
    },1200);

};
