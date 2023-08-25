from pathlib import Path
import os
import json
import shutil

def summarizeJSON(subject):
    subjectJSON = {}
    for folder in os.listdir(Path("static") / subject):
        if not os.path.isdir(Path("static") / subject / folder):
            continue
        with (Path("static") / subject / folder / "info.json").open() as f:
            subjectJSON[folder] = json.loads(f.read())
        subjectJSON[folder]["url"] = folder

        with (Path("static") / subject / folder / "desc.md").open() as f:
            subjectJSON[folder]["markdown"] = f.read()

    with (Path("src") / "lib" / (subject + "Summary.json")).open("w") as f:
        f.write(json.dumps(subjectJSON))

summarizeJSON("locations")
summarizeJSON("projects")

shutil.copy(Path("static") / "tools" / "info.json", Path("src") / "lib" / "toolsSummary.json")


#for folder in os.listdir(Path("static") / "projects"):
#    if not os.path.isdir(folder):
#        continue
#    with (Path("static") / "locations" / folder / "info.json").open() as f:
#        locationsJSON[folder] = json.loads(f.read())
#    locationsJSON[folder]["url"] = folder


