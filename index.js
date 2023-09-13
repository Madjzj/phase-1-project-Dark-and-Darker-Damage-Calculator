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
function createBodyDropdown(){
    const bodyDropdown = document.createElement("select")
    const head = document.createElement("option")
    const torso = document.createElement("option")
    const limb = document.createElement("option")
    head.textContent = "Head"
    torso.textContent = "Torso"
    limb.textContent = "Limb"
    head.value = 1.5
    torso.value = 1
    limb.value = .5
    bodyDropdown.id = "body-dropdown"
    bodyDropdown.appendChild(head)
    bodyDropdown.appendChild(torso)
    bodyDropdown.appendChild(limb)
    return bodyDropdown
}
function calculatePhysPercent(physicalPower){
    let physicalPercent = -80;
    for(let x = 0; x < physicalPower;x++){
        if(x < 5){
            physicalPercent += 10;
        }else if(x < 7){
            physicalPercent += 5;
        }else if(x < 11){
            physicalPercent +=3;
        }
        else if(x < 15){
            physicalPercent += 2;
        }
        else if(x < 50){
            physicalPercent += 1;
        }
        else if(x < 100){
            physicalPercent += .5;
        }
    }
    return physicalPercent
}
function calculatePhysReduction(armorRating, physReduction){
    let physicalReduction = -619;
    physicalReduction += physReduction;
    for(let x = -300; x < armorRating ;x++){
        console.log("lesdoit")
        if(x < -3){
            physicalReduction += 2;
        }else if(x < 22){
            physicalReduction += 1;
        }else if(x < 31){
            physicalReduction += .5;
        }else if(x<42){
            physicalReduction += .4;
        }else if(x<52){
            physicalReduction += .3;
        }else if(x<62){
            physicalReduction += .2;
        }else if(x<112){
            physicalReduction += .1;
        }else if(x<175){
            physicalReduction += .2;
        }else if(x<262){
            physicalReduction += .3;
        }else if(x<317){
            physicalReduction += .2;
        }else if(x<400){
            physicalReduction += .1;
        }else if(x<424){
            physicalReduction += .05;
        }else if(x<450){
            physicalReduction += .025;
        }else if(x<500){
            physicalReduction += .02;
        }
        if(physicalReduction > 85){
            return 85;
        }
    }
    console.log(physReduction)
    return physicalReduction;
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
    ];
    const race = [0,1,-1,0];
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
            zones:[100,80],
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
            attacks:[100,105,105,105],
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
    ];
    const perks = {
        "FighterPerks":[
            {name:"Adrenaline Spike",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b6/Perk_Adrenaline_Spike.png/96px-Perk_Adrenaline_Spike.png",
            buff:true
            },
            {name:"Barricade",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/27/Perk_Barricade.png/96px-Perk_Barricade.png",
            buff:false
            },
            {name:"Combo Attack",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/e1/Perk_Combo_Attack.png/96px-Perk_Combo_Attack.png",
            physBonus:"10",
            buff:true
            },
            {name:"Counterattack",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d0/Perk_Counterattack.png/96px-Perk_Counterattack.png",
            buff:false
            },
            {name:"Defense Expert",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/9/93/Perk_Defense_Expert.png/96px-Perk_Defense_Expert.png",
            buff:false
            },
            {name:"Dual Wield",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/f4/Perk_Dual_Wield.png/96px-Perk_Dual_Wield.png",
            buff:false
            },
            {name:"Projectile Resistance",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/8d/Perk_Projectile_Resistance.png/96px-Perk_Projectile_Resistance.png",
            buff:false
            },
            {name:"Shield Expert",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/e8/Perk_Shield_Expert.png/96px-Perk_Shield_Expert.png",
            buff:false
            },
            {name:"Slayer",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/5c/Perk_Slayer.png/96px-Perk_Slayer.png",
            buff:true,
            wepDmg:5
            },
            {name:"Swift",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/0/06/Perk_Swift.png/96px-Perk_Swift.png",
            buff:false
            },
            {name:"Weapon Mastery",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/ec/Perk_Weapon_Mastery.png/96px-Perk_Weapon_Mastery.png",
            buff:true,
            physBonus:-10
            }
        ],
        "BarbarianPerks":[
            {name:"Axe Specialization",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/a/a7/Perk_Axe_Specialization.png/96px-Perk_Axe_Specialization.png",
            buff:true,
            physBonus:10
            },
            {name:"Berserker",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/2d/Perk_Berserker.png/96px-Perk_Berserker.png",
            buff:true,
            physBonus:33.4
            },
            {name:"Carnage",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/f/f1/Perk_Carnage.png/96px-Perk_Carnage.png",
            buff:true,
            str: 10
            },
            {name:"Executioner",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/29/Perk_Executioner.png/96px-Perk_Executioner.png",
            buff:true,
            head:1
            },
            {name:"Iron Will",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/3/35/Perk_Iron_Will.png/96px-Perk_Iron_Will.png",
            buff:false
            },
            {name:"Morale Boost",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/82/Perk_Morale_Boost.png/96px-Perk_Morale_Boost.png",
            buff:false
            },
            {name:"Potion Chugger",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/6/6b/Perk_Potion_Chugger.png/96px-Perk_Potion_Chugger.png",
            buff:false
            },
            {name:"Savage",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/55/Perk_Savage.png/96px-Perk_Savage.png",
            buff:true,
            physBonus:10
            },
            {name:"Crush",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d0/Perk_Smash.png/96px-Perk_Smash.png",
            buff:false
            },
            {name:"Robust",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/e/e6/Perk_Toughness.png/96px-Perk_Toughness.png",
            buff:false
            },
            {name:"Two-Hander",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/8f/Perk_Two_Handed_Weapon_Expert.png/96px-Perk_Two_Handed_Weapon_Expert.png",
            buff:true,
            physBonus:5%
            }
        ],
        "RoguePerks":[
            {name:"Ambush",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/2/26/Perk_Ambush.png/96px-Perk_Ambush.png",
            buff:true,
            physBonus:50
            },
            {name:"Back Attack",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/bf/Perk_Backstab.png/96px-Perk_Backstab.png",
            buff:true,
            physBonus:30
            },
            {name:"Creep",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d1/Perk_Creep.png/96px-Perk_Creep.png",
            buff:false
            },
            {name:"Dagger Expert",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/c/c2/Perk_Dagger_Expert.png/96px-Perk_Dagger_Expert.png",
            buff:true,
            physBonus:10
            },
            {name:"Double Jump",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/1/13/Perk_Double_Jump.png/96px-Perk_Double_Jump.png",
            buff:false
            },
            {name:"Hand Crossbow Mastery",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/9/9b/Hand_Crossbow_Mastery.png/96px-Hand_Crossbow_Mastery.png",
            buff:false
            },
            {name:"Hidden Pockets",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/44/Perk_Hidden_Pockets.png/96px-Perk_Hidden_Pockets.png",
            buff:false
            },
            {name:"Jokester",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/d/d9/Jokester.png/96px-Jokester.png",
            buff:true,
            allAtr:2
            },
            {name:"Lockpick Expert",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/6/67/Perk_Lockpick_Expert.png/96px-Perk_Lockpick_Expert.png",
            buff:false
            },
            {name:"Pickpocket",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/c/cb/Perk_Pickpocket.png/96px-Perk_Pickpocket.png",
            buff:false
            },
            {name:"Poisoned Weapon",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b1/Perk_Poisoned_Weapon.png/96px-Perk_Poisoned_Weapon.png",
            buff:true
            },
            {name:"Shadow Runner",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/8/8b/Perk_Shadow_Runner.png/96px-Perk_Shadow_Runner.png",
            buff:false
            },
            {name:"Stealth",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/6/63/Perk_Stealth.png/96px-Perk_Stealth.png",
            buff:false
            },
            {name:"Thrust",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/4/4e/Perk_Thrust.png/96px-Perk_Thrust.png",
            buff:true,
            armorPen:15
            },
            {name:"Trap Detection",
            image:"https://darkanddarker.wiki.spellsandguns.com/images/thumb/a/a8/Perk_Trap_Detection.png/96px-Perk_Trap_Detection.png",
            buff:false
            }
        ],
        "RangerPerks":[
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            }
        ],
        "WizardPerks":[
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            }
        ],
        "ClericPerks":[
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            }
        ],
        "BardPerks":[
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            }
        ],
        "WarlockPerks":[
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            },
            {name:"",
            image:"",
            buff:false
            }
        ]
    };
    const skillsArray = [

    ];
    const classDropdown = document.querySelector("#class-dropdown");
    let selectedClass;
    const weapons = document.getElementById("weapon-display");
    classDropdown.addEventListener('change',(event)=>{
        selectedClass = event.target.value;
        let className
        if(selectedClass >= 0){
            className = classArray[selectedClass].name;
        }else{
            className = "N/A"
        }
        const calculated = document.querySelector("#attacks-damage");
        while(calculated.firstChild){
            calculated.removeChild(calculated.firstChild);
        }
        while(weapons.firstChild){
            weapons.removeChild(weapons.firstChild)
        }
        for(const weapon of weaponsObjects){
            if(weapon.class.includes(className)){
                weapons.appendChild(populateWeapon(weapon))
            }
        }
        const weaponZones=document.querySelector("#weapon-zones");
        weapons.addEventListener("change",(event)=>{
            
            if(event.target.type === "radio"){
                const selectedWeapon = weaponsObjects.find((element)=> element.weapon === event.target.value);
                
                const image = document.createElement("img");
                while(calculated.firstChild){
                    calculated.removeChild(calculated.firstChild);
                }
                while(weaponZones.firstChild){
                    weaponZones.removeChild(weaponZones.firstChild)
                }
                image.src= selectedWeapon.zoneImage
                weaponZones.appendChild(image)
                const zoneRatios = document.createElement("div")
                zoneRatios.id = "zone-ratios"
                const sweetSpotDropdown = document.createElement("select")
                x = 0;
                for(const zone of selectedWeapon.zones){
                    const label = document.createElement("label")
                    const option = document.createElement("option")
                    if(x === 0){
                        label.textContent = "the green zone does " + zone + "% damage"
                        label.style.color = "green";
                        option.value = zone
                        option.textContent = "Green"                   }
                    if(x === 1){
                        label.textContent = "the orange zone does " + zone + "% damage"
                        label.style.color = "orange";
                        option.value = zone
                        option.textContent = "Orange"

                    }
                    if(x === 2){
                        label.textContent = "the red zone does " + zone + "% damage"
                        label.style.color = "red";
                        option.value = zone
                        option.textContent = "Red"

                    }
                    x++;
                    label.id = "ratio"
                    sweetSpotDropdown.appendChild(option)
                    zoneRatios.appendChild(label)
                }
                const divider = document.createElement("div")
                const sweetSpotLabel = document.createElement("label")
                sweetSpotLabel.textContent = "where are you hitting"
                sweetSpotDropdown.id="sweetspot-dropdown"
                weaponZones.appendChild(zoneRatios)
                divider.appendChild(sweetSpotLabel)
                divider.appendChild(sweetSpotDropdown)
                divider.appendChild(createBodyDropdown())
                divider.id="sweetspot-divider"
                weaponZones.appendChild(divider)
            }
        })
        while(weaponZones.firstChild){
            weaponZones.removeChild(weaponZones.firstChild)
        }
    });
    const form = document.querySelector("form")
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log(event)
        const weapon = document.querySelector('input[name="weapon"]:checked')
        if(weapon){
            //The formula is ((((((Base Weapon/Magical Damage + "Buff" Weapon Damage) * Combo Bonus * Impact Zone Bonus) + "Gear" Weapon Damage/Magical Damage + Divine Strike Damage) * (1 + Power Bonus)) + Additional Damage) * (1 + Hit Location Bonus) * (1 - (Damage Reduction * (1 - Penetration))) * (1 - Projectile Reduction)) + True Damage
            const baseWepDmg = Number(event.target[0].value);
            const bonusWepDmg = Number(event.target[5].value);
            const powerBonus = Number(event.target[1].value)+Number(event.target[2].value)+Number(event.target[3].value)+classArray[selectedClass].stats[0]+Number(document.querySelector("#race-dropdown").value)
            const addDmg = Number(event.target[6].value);
            const hitLocation = Number(document.querySelector("#body-dropdown").value);
            const physPercent = ((calculatePhysPercent(powerBonus)) + Number(event.target[4].value))/100;
            const sweetspot = Number(document.querySelector("#sweetspot-dropdown").value)/100
            const physReduction = (calculatePhysReduction(Number(event.target[9].value),Number(event.target[10].value)))/100
            const armorPen = (Number(event.target[8].value))
            const trueDmg = Number(event.target[7].value)
            const divineStrike = 0;
            const buff = 0;
            let x = 1;
            const selectedWeapon = weaponsObjects.find((element)=> element.weapon === weapon.value);
            console.log(selectedWeapon.attacks)
            const calculated = document.querySelector("#attacks-damage");
            while(calculated.firstChild){
                calculated.removeChild(calculated.firstChild);
            }
            for(const combo of selectedWeapon.attacks){
                const p = document.createElement('p')
                console.log()
                p.textContent = "attack #"+x+": "+Math.floor(((((((baseWepDmg + buff) * (combo/100) * (sweetspot)) + bonusWepDmg + divineStrike) * (1 + physPercent)) + addDmg) * (hitLocation)*(1-(physReduction*(1-armorPen))))+trueDmg)
                
                calculated.appendChild(p);
                x++
            }
        }
        
        

    });
});
