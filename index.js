function populateWeapon(obj){
    const weapon = document.createElement("div");
    weapon.classList.add("weapon");
    weapon.id = obj.weapon;
    const image = document.createElement("img");
    image.src = obj.image;
    const label = document.createElement("label")
    label.textContent = obj.weapon
    const radBtn = document.createElement("input")
    radBtn.type="radio"
    radBtn.name="weapon"
    radBtn.value=obj.weapon;
    image.classList.add("item");
    label.classList.add("item")
    weapon.appendChild(image);
    weapon.appendChild(label);
    weapon.appendChild(radBtn);
    return weapon;
}
document.addEventListener('DOMContentLoaded',()=>{
    const classArray = [
        {
            "name":"Fighter",
            "stats":[15,15,15,15,15]
        },
        {
            "name":"Barbarian",
            "stats":[30,11,18,6,10]
        },
        {
            "name":"Rogue",
            "stats":[8,35,5,12,15]
        },
        {
            "name":"Ranger",
            "stats":[10,20,10,10,25]
        },
        {
            "name":"Wizard",
            "stats":[6,12,20,25,12]
        },
        {
            "name":"Cleric",
            "stats":[11,11,30,18,5]
        },
        {
            "name":"Bard",
            "stats":[14,14,7,20,20]
        },
        {
            "name":"Warlock",
            "stats":[13,14,23,15,10]
        }
    ]
    const weaponsObjects = [
        {weapon:"Arming Sword",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d5/Arming_Sword_0.png/66px-Arming_Sword_0.png",
            class:["Fighter","Ranger","Bard"],
            attacks:[100,105,110],
            zones:[100,90,70],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/8/89/Arming_Sword_Hitbox.png"
        },
        {weapon:"Falchion",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/7/70/Falchion_2.png/60px-Falchion_2.png",
            class:["Fighter","Warlock","Bard"],
            attacks:[100,105,110],
            zones:[100,90,80],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/f/f2/Falchion_Hitbox.png"
        },
        {weapon:"Longsword",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/fa/Longsword_2.png/60px-Longsword_2.png",
            class:["Fighter","Warlock"],
            attacks:[100,105,110],
            attacks2:[187.5,187.5],
            zones:[100,80,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/fc/Longsword_Hitbox.png/67px-Longsword_Hitbox.png"
        },
        {weapon:"Rapier",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/89/Rapier_2.png/60px-Rapier_2.png",
            class:["Ranger","Bard","Rogue"],
            attacks:[100,105,110,115],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/1/1a/Rapier_Hitbox.png"
        },
        {weapon:"Short Sword",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/ef/Short_Sword_2.png/60px-Short_Sword_2.png",
            class:["Fighter","Ranger","Bard","Rogue"],
            attacks:[100,105,110],
            zones:[100,80],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/d/db/Short_Sword_Hitbox.png"
        },
        {weapon:"Viking Sword",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/fb/Viking_Sword_2.png/60px-Viking_Sword_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100,105,110],
            zones:[100,90,70],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/a/a1/Viking_Sword_Hitbox.png"
        },
        {weapon:"Zweihander",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/28/Zweihander_2.png/60px-Zweihander_2.png",
            class:["Fighter","Barbarian","Warlock"],
            attacks:[100,105,110],
            attacks2:[115],
            zones:[100,80,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/3/3c/Zweihander_Hitbox.png/74px-Zweihander_Hitbox.png"
        },
        {weapon:"Flanged Mace",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/26/Flanged_Mace_2.png/60px-Flanged_Mace_2.png",
            class:["Fighter","Cleric"],
            attacks:[100,105,110],
            zones:[100,70],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/8/87/Flanged_Mace_Hitbox.png"
        },
        {weapon:"Morning Star",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/9/9d/Morning_Star_2.png/60px-Morning_Star_2.png",
            class:["Cleric"],
            attacks:[100,105,110],
            zones:[100,70],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/3/38/Morning_Star_Hitbox.png"
        },
        {weapon:"Quarterstaff",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/db/Quarterstaff_2.png/60px-Quarterstaff_2.png",
            class:["Cleric","Warlock","Barbarian","Wizard"],
            attacks:[100,110,110,110],
            zones:[100,80],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/9/9c/Quarterstaff_Hitbox.png/60px-Quarterstaff_Hitbox.png"
        },
        {weapon:"War Maul",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/0/01/War_Maul_2.png/60px-War_Maul_2.png",
            class:["Barbarian","Cleric"],
            attacks:[100,115,115],
            attacks2:[90,120],
            zones:[100,70],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/5d/War_Maul_Hitbox.png/100px-War_Maul_Hitbox.png"
        },
        {weapon:"Castillon Dagger",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/48/Castillon_Dagger_2.png/60px-Castillon_Dagger_2.png",
            class:["Rogue","Fighter","Bard"],
            type:"Dagger",
            attacks:[100,100,150],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/a/a7/Castillon_Dagger_Hitbox.png"
        },
        {weapon:"Kris Dagger",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d6/Kris_Dagger_2.png/60px-Kris_Dagger_2.png",
            class:["Rogue"],
            type:"Dagger",
            attacks:[100,110,110,110],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/0/00/Kris_Dagger_Hitbox.png"
        },
        {weapon:"Rondel Dagger",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/f4/Rondel_Dagger_2.png/60px-Rondel_Dagger_2.png",
            class:["Wizard","Rogue","Bard"],
            type:"Dagger",
            attacks:[100,105,105],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/d/d4/Rondel_Dagger_Hitbox.png"
        },
        {weapon:"Stiletto Dagger",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/f2/Stiletto_Dagger_2.png/60px-Stiletto_Dagger_2.png",
            class:["Rogue"],
            type:"Dagger",
            attacks:[100,100,140],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/c/c9/Stiletto_Dagger_Hitbox.png"
        },
        {weapon:"Bardiche",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/0/05/Bardiche_2.png/60px-Bardiche_2.png",
            class:["Barbarian","Warlock"],
            attacks:[100,110,120],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/26/Bardiche_Hitbox.png/53px-Bardiche_Hitbox.png"
        },
        {weapon:"Halberd",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/5b/Halberd_2.png/60px-Halberd_2.png",
            class:["Fighter","Warlock"],
            attacks:[100,110,120],
            attacks:[110,110],
            zones:[100],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/2e/Halberd_Hitbox.png/60px-Halberd_Hitbox.png"
        },
        {weapon:"Spear",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/23/Spear_2.png/60px-Spear_2.png",
            class:["Fighter"],
            attacks:[100,110,120],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/eb/Spear_Hitbox.png/33px-Spear_Hitbox.png"
        },
        {weapon:"Battle Axe",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/3/33/Battle_Axe_2.png/60px-Battle_Axe_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100,115],
            attacks2:[100],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/4e/Battle_Axe_Hitbox.png/89px-Battle_Axe_Hitbox.png"
        },
        {weapon:"Double Axe",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/a/a4/Double_Axe_2.png/60px-Double_Axe_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100,105,110],
            attacks2:[110],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/3/37/Double_Axe_Hitbox.png/91px-Double_Axe_Hitbox.png"
        },
        {weapon:"Felling Axe",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/3/33/Battle_Axe_2.png/60px-Battle_Axe_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/4e/Battle_Axe_Hitbox.png/89px-Battle_Axe_Hitbox.png"
        },
        {weapon:"Hatchet",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/e7/Hatchet_2.png/60px-Hatchet_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100,105,110],
            zones:[100,80],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/3/3f/Hatchet_Hitbox.png"
        },
        {weapon:"Horsemans Axe",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b4/Horsemans_Axe_2.png/60px-Horsemans_Axe_2.png",
            class:["Fighter","Barbarian"],
            attacks:[100,115],
            attacks2:[100],
            zones:[100,60],
            zoneImage: "https://darkanddarker.wiki.spellsandguns.com/images/4/4d/Horsemans_Axe_Hitbox.png"
        },
        {weapon:"Crystal Sword",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/7/78/Crystal_Sword_2.png/60px-Crystal_Sword_2.png",
            class:["Wizard","Warlock"],
            attacks:[100,105,110],
            zones:[100,90,70],
            zoneImage:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/7/76/Crystal_Sword_Hitbox.png/64px-Crystal_Sword_Hitbox.png"
        },
        {weapon:"Magic Staff",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/9/98/Magic_Staff_2.png/60px-Magic_Staff_2.png",
            class:["Wizard","Warlock","Cleric"],
            attacks:[100,105,110],
            zones:[100,80],
            zoneImage:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/45/Magic_Staff_Hitbox.png/41px-Magic_Staff_Hitbox.png"
        }
    ]
    const perksArray = [
        {}
    ]
    const skillsArray = [

    ]
    const classDropdown = document.querySelector("#class-dropdown")
    let selectedClass
    const weapons = document.getElementById("weapon-display")
    classDropdown.addEventListener('change',(event)=>{
        selectedClass = event.target.value;
        let className
        if(selectedClass >= 0){
            className = classArray[selectedClass].name;
        }else{
            className = "N/A"
        }
        console.log(className);
        while(weapons.firstChild){
            weapons.removeChild(weapons.firstChild)
        }
        for(const weapon of weaponsObjects){
            if(weapon.class.includes(className)){
                weapons.appendChild(populateWeapon(weapon))
            }
        }
        weapons.addEventListener("change",(event)=>{
            if(event.target.type === "radio"){
                const selectedWeapon = weaponsObjects.find((element)=> element.weapon === event.target.value);
                const weaponZones=document.querySelector("#weapon-zones");
                const image = document.createElement("img");
                while(weaponZones.firstChild){
                    weaponZones.removeChild(weaponZones.firstChild)
                }
                console.log(selectedWeapon)
                image.src= selectedWeapon.zoneImage
                weaponZones.appendChild(image)
                weaponZones.style.outline = "auto"
                image.style.outline = "auto"
                const zoneRatios = document.createElement("div")
                zoneRatios.id = "zone-ratios"
                x = 0;
                for(const zone of selectedWeapon.zones){
                    label = document.createElement("label")
                    
                    if(x === 0){
                        label.textContent = "the green zone does " + zone + "% damage"
                        label.style.color = "green";
                    }
                    if(x === 1){
                        label.textContent = "the orange zone does " + zone + "% damage"
                        label.style.color = "orange";
                    }
                    if(x === 2){
                        label.textContent = "the red zone does " + zone + "% damage"
                        label.style.color = "red";
                    }
                    x++;
                    label.id = "ratio"
                    zoneRatios.appendChild(label)
                }
                weaponZones.appendChild(zoneRatios)
                
            }
        })
    })
    

});
