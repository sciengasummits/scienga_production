
import random

categories = [
    ("Keynote Speaker", 20),
    ("Plenary Speaker", 20),
    ("Poster Presenter", 20),
    ("Student Speaker", 20),
    ("Delegate", 20),
    ("Committee", 20)
]

# Existing counts roughly:
# Keynote: 3, Plenary: 3, Poster: 3, Delegate: 3, Student: 8, Committee: 6
# Need to add:
# Keynote: 17
# Plenary: 17
# Poster: 17
# Delegate: 17
# Student: 12
# Committee: 14

# Data for generation
first_names = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Margaret", "Anthony", "Betty", "Donald", "Sandra", "Mark", "Ashley", "Paul", "Dorothy", "Steven", "Kimberly", "Andrew", "Emily", "Kenneth", "Donna", "Joshua", "Michelle", "George", "Carol", "Kevin", "Amanda", "Brian", "Melissa", "Edward", "Deborah", "Wei", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Ahmed", "Mohamed", "Fatima", "Aisha", "Ali", "Hassan", "Ibrahim", "Yuki", "Hiroshi", "Sakura", "Kenji", "Akira", "Elena", "Dmitry", "Olga", "Ivan", "Maria", "Ana", "Carlos", "Jose", "Luis", "Sofia", "Isabella", "Lucas", "Mateo", "Hans", "Klaus", "Juergen", "Ursula", "Monika", "Lars", "Sven", "Ingrid", "Bjorn", "Astrid"]
last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Wang", "Zhang", "Li", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Khan", "Ali", "Ahmed", "Hassan", "Ibrahim", "Tanaka", "Suzuki", "Sato", "Takahashi", "Watanabe", "Ivanov", "Smirnov", "Kuznetsov", "Popov", "Sokolov", "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Larsen", "Jensen", "Nielsen", "Hansen", "Pedersen"]

universities = ["MIT", "Stanford University", "Harvard University", "Caltech", "University of Oxford", "University of Cambridge", "ETH Zurich", "Imperial College London", "University of Chicago", "UCL", "National University of Singapore", "Tsinghua University", "Peking University", "University of Tokyo", "University of Toronto", "University of Melbourne", "University of Sydney", "Technical University of Munich", "EPFL", "University of Edinburgh", "Columbia University", "Princeton University", "Yale University", "Cornell University", "Johns Hopkins University", "University of Michigan", "UC Berkeley", "UCLA", "UCSD", "University of Washington", "Duke University", "Northwestern University", "New York University", "University of Texas at Austin", "Georgia Tech", "University of Illinois at Urbana-Champaign", "University of British Columbia", "McGill University", "Australian National University", "Monash University", "University of Queensland", "Kyoto University", "Seoul National University", "KAIST", "HKUST", "Nanyang Technological University", "Delft University of Technology", "University of Amsterdam", "Sorbonne University", "PSL Research University"]

titles = ["Professor", "Associate Professor", "Assistant Professor", "Dr.", "Senior Researcher", "Research Fellow", "Ph.D. Candidate", "Graduate Student", "Director", "Head of Department", "Chief Scientist", "Principal Investigator"]

images = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
]

existing_ids = set(range(1, 29))
next_id = 29

new_speakers = []

target_counts = {
    "Keynote Speaker": 20,
    "Plenary Speaker": 20,
    "Poster Presenter": 20,
    "Delegate": 20,
    "Student Speaker": 20,
    "Committee": 20
}

current_counts = {
    "Keynote Speaker": 3,
    "Plenary Speaker": 3,
    "Poster Presenter": 3,
    "Delegate": 3,
    "Student Speaker": 8,
    "Committee": 6
}

generated_code = "export const speakers = [\n"

# Add existing (mocked for now, assuming I'll prepend the existing ones correctly or just rewrite the whole file. 
# Better to rewrite the whole file using the previously read data and appending new ones).
# Since I can't easily parse the existing JS file in this script without regex, I will just output the NEW speakers
# and then I'll use multi_replace to insert them or rewrite the file.
# Actually, I'll output the entire file content.

# Re-creating existing speakers based on `speakersData.js` content read previously.
# I'll just hardcode them or since I already read the file, I can just append to the list.
# But wait, I'm writing a Python script to generate the console output, which I'll then use.
# I'll just print the JS object structure for the NEW speakers, and I'll append them to the existing list manually using replace_file_content.

for category, target in target_counts.items():
    current = current_counts[category]
    needed = target - current
    for _ in range(needed):
        name = f"{random.choice(first_names)} {random.choice(last_names)}"
        while any(s['name'] == name for s in new_speakers): # simple duplicate check
            name = f"{random.choice(first_names)} {random.choice(last_names)}"
            
        speaker = {
            "id": next_id,
            "name": name,
            "title": random.choice(titles),
            "affiliation": random.choice(universities),
            "category": category,
            "image": random.choice(images)
        }
        new_speakers.append(speaker)
        next_id += 1

# Output format
print("export const speakers = [")
# I will cheat and say "INSERT EXISTING HERE" then new ones.
# Actually, I'll just output the new ones as a list of objects, comma separated.
for s in new_speakers:
    print(f"    {{")
    print(f"        id: {s['id']},")
    print(f"        name: \"{s['name']}\",")
    print(f"        title: \"{s['title']}\",")
    print(f"        affiliation: \"{s['affiliation']}\",")
    print(f"        category: \"{s['category']}\",")
    print(f"        image: \"{s['image']}\"")
    print(f"    }},")
print("];")
