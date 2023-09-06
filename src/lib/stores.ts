import { writable } from 'svelte/store';
import * as animateScroll from "svelte-scrollto";
import locationsJSON from '$lib/locationsSummary.json';
import projectsJSON from '$lib/projectsSummary.json';
import toolsJSON from '$lib/toolsSummary.json';
export const subpages = ["Highlights", "About Me", "Timeline", "Projects"];


//read urls
let tSubpageUrls = [];
for(let i = 0; i < subpages.length; i++) {
    tSubpageUrls.push(subpages[i].replace(/\s/g,'').toLowerCase());
}
export let subpageUrls = tSubpageUrls;

animateScroll.setGlobalOptions({
    offset: -60,
})

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

//Dictionaries where the key is the name of the item, and the value is its reference
var tlocations = {};
var ttools = {};
var tprojects = {};
let tLanguages = 0;

class Location {
    constructor(name : string, url : string, markdown : string, date : String, endDate? :String ) {
        this.name = name;
        this.url = url;
        this.markdown = markdown;
        this.date = new Date(date);
        if (endDate == "present") {
            this.endDate = new Date();
            this.dateStr = month[this.date.getMonth()] + " " + this.date.getFullYear().toString() + " - Present";
        }else {
            this.dateStr = month[this.date.getMonth()] + " " + this.date.getFullYear().toString();
            if (endDate != null) {
                
                this.endDate = new Date(endDate);
                this.dateStr = this.dateStr + " - " + month[this.endDate.getMonth()] + " " + this.endDate.getFullYear().toString();
              }
        } 
        
        
        this.projects = [];
        tlocations[url] = this;
    }
}

class Tool {
    constructor(name : string, url : string, isLanguage : boolean) {
        this.name = name;
        this.url = url;
        this.projects = [];
        ttools[url] = this;
        this.isLanguage = isLanguage;
        if (isLanguage) {
            tLanguages += 1;
        }
    }
}

class Project {
    //Half-assed attempted to match typescript spec
    location : Location;
    tools : Tool[];
    vBanner : string;
    constructor(name : string, desc : string, url : string, markdown : string, where : Location ,tools : Tool[], date : String, endDate? : String, demoUrl? : String) {
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.markdown = markdown;
        this.location = where;
      where.projects.push(this);
      this.tools = tools;
      tprojects[url] = this;
      this.date = new Date(date);
      if (endDate == "present") {
          this.endDate = new Date();
          this.dateStr = month[this.date.getMonth()] + " " + this.date.getFullYear().toString() + " - Present";
      }else {
          this.dateStr = month[this.date.getMonth()] + " " + this.date.getFullYear().toString();
          if (endDate != null) {
            this.endDate = new Date(endDate);
            this.dateStr = this.dateStr + " - " + month[this.endDate.getMonth()] + " " + this.endDate.getFullYear().toString();
          }
      }
      this.demoUrl = demoUrl;
    }
}
for(let i = 0; i < toolsJSON.length; i++) {
    let curTool = toolsJSON[i];
    if ('url' in curTool) {
        new Tool(curTool["name"],curTool["url"],curTool["isLanguage"]);
    } else {
        new Tool(curTool["name"],curTool["name"].replace(/\s/g,'').toLowerCase(),curTool["isLanguage"]);
    }
}

let sillyJS = Object.keys(locationsJSON)
for(let i = 0; i < sillyJS.length; i++) {
    let curLocale = locationsJSON[sillyJS[i]];
    if (typeof curLocale["date"] === 'string') {
        new Location(curLocale["name"],curLocale["url"],curLocale["markdown"],curLocale["date"],null,curLocale["demoUrl"]);
    } else {
        new Location(curLocale["name"],curLocale["url"],curLocale["markdown"],curLocale["date"]["start"],curLocale["date"]["end"],curLocale["demoUrl"]);
    }
}
//console.log(ttools)
sillyJS = Object.keys(projectsJSON)
for(let i = 0; i < sillyJS.length; i++) {
    let curProject = projectsJSON[sillyJS[i]];
    let rtools = [];
    //console.log(curProject["tools"],ttools[curProject["tools"][0]]);
    for(let j = 0; j < curProject["tools"].length; j++) {
        if (!(curProject["tools"][j] in ttools)) {
            console.log("Missing Tool for ",curProject.name,":",curProject["tools"][j])
        }
        rtools.push(ttools[curProject["tools"][j]]);
        //console.log(curProject["tools"][j]);
    }
    //console.log(rtools);
    //curProject["tools"].map((e) => {return ttools[e]});
    if (typeof curProject["date"] === 'string') {
        new Project(curProject["name"], curProject["desc"],curProject["url"],curProject["markdown"], tlocations[curProject["location"]],rtools,curProject["date"]);
    } else {
        new Project(curProject["name"], curProject["desc"],curProject["url"],curProject["markdown"], tlocations[curProject["location"]],rtools,curProject["date"]["start"],curProject["date"]["end"]);
    }
    
}

export const locationWheel = [tlocations["lsa"],tlocations["ssu"],tlocations["id"]];
export const locations = tlocations;
export const tools = ttools;
export const projects = tprojects;
export const knownLanguages = tLanguages;

//Modifying current filters

export let chosenTool = writable(null);
export let chosenLocation = writable(null);
export let chosenProject = writable(null);



chosenProject.subscribe((value) => {
    console.log("project changed to",value);
})


chosenTool.subscribe((value) => {
    console.log("tool changed to",value);
    chosenProject.set(null);
    /*
    if(value != null) {
        animateScroll.scrollTo({element : "#projects"});
    }*/
    
})

chosenLocation.subscribe((value) => {
    console.log("location changed to",value);
    chosenProject.set(null);
    /*
    if(value != null) {
        animateScroll.scrollTo({element : "#projects"});
    }*/

})
