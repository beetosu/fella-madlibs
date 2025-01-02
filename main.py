import random, json

with open("files/names.txt") as na:
    names = na.read().splitlines()

with open("files/templates.txt") as t:
    templates = t.read().splitlines()

with open("files/adj.txt") as adj:
    adjectives = adj.read().splitlines()

with open("files/adverbs.txt") as adv:
    adverbs = adv.read().splitlines()

with open("files/nouns.txt") as no:
    nouns = no.read().splitlines()

def get_name():
    suffixes = [ ", Esq.", " Jr.", " Sr.", " The Third" ]
    prefixes = ["Sir", "His Honorable", "Dr.", "Professor", "Madam", "Dame"]

    name = random.choice(names)
    if random.random() > .9:
        name = f"{random.choice(prefixes)} {name}"
    if random.random() > .9:
        name = f"{name}{random.choice(suffixes)}"
    
    return name

def get_adjective():
    adjective = random.choice(adjectives)

    adverb_chance = random.random()
    if adverb_chance > .75:
        adverb = random.choice(adverbs)
        adjective = f"{adverb} {adjective}"
        if adverb_chance > .9:
            adjective = f"{adverb} {adjective}"
    return adjective

def get_full_name(selected_template):
    if random.random() > .95:
        return get_name()
    else:
        selected_template = selected_template.replace("{name}", get_name())
        if "{adj}" in selected_template:
            selected_template = selected_template.replace("{adj}", get_adjective())
        if "{noun}" in selected_template:
            selected_template = selected_template.replace("{noun}", random.choice(nouns))

        selected_template = selected_template.replace("  ", " ")
    return selected_template.title()

user_input = ""
while user_input == "":
    full_name = get_full_name(random.choice(templates))
    user_input = input(f"type the name you want given \"{full_name}\" (or nothing to refresh): ")

print(user_input)

# TODO: add user input into existing json file
#fellas = {"1": "Edgar"}
#with open("fellas.json", "w") as outfile:
    #json.dump(fellas, outfile)