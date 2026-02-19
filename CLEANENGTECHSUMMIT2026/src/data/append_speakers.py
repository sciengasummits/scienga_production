
import os

# Data generation logic again (or just hardcode what I want to add)
import random

categories = [
    ("Keynote Speaker", 20),
    ("Plenary Speaker", 20),
    ("Poster Presenter", 20),
    ("Student Speaker", 20),
    ("Delegate", 20),
    ("Committee Speaker", 20)
]

first_names = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Margaret", "Anthony", "Betty", "Donald", "Sandra", "Mark", "Ashley", "Paul", "Dorothy", "Steven", "Kimberly", "Andrew", "Emily", "Kenneth", "Donna", "Joshua", "Michelle", "George", "Carol", "Kevin", "Amanda", "Brian", "Melissa", "Edward", "Deborah", "Wei", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Ahmed", "Mohamed", "Fatima", "Aisha", "Ali", "Hassan", "Ibrahim", "Yuki", "Hiroshi", "Sakura", "Kenji", "Akira", "Elena", "Dmitry", "Olga", "Ivan", "Maria", "Ana", "Carlos", "Jose", "Luis", "Sofia", "Isabella", "Lucas", "Mateo", "Hans", "Klaus", "Juergen", "Ursula", "Monika", "Lars", "Sven", "Ingrid", "Bjorn", "Astrid"]
last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Wang", "Zhang", "Li", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Khan", "Ali", "Ahmed", "Hassan", "Ibrahim", "Tanaka", "Suzuki", "Sato", "Takahashi", "Watanabe", "Ivanov", "Smirnov", "Kuznetsov", "Popov", "Sokolov", "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Larsen", "Jensen", "Nielsen", "Hansen", "Pedersen"]
universities = ["MIT", "Stanford University", "Harvard University", "Caltech", "University of Oxford", "University of Cambridge", "ETH Zurich", "Imperial College London", "University of Chicago", "UCL", "National University of Singapore", "Tsinghua University", "Peking University", "University of Tokyo", "University of Toronto", "University of Melbourne", "University of Sydney", "Technical University of Munich", "EPFL", "University of Edinburgh", "Columbia University", "Princeton University", "Yale University", "Cornell University", "Johns Hopkins University", "University of Michigan", "UC Berkeley", "UCLA", "UCSD", "University of Washington", "Duke University", "Northwestern University", "New York University", "University of Texas at Austin", "Georgia Tech", "University of Illinois at Urbana-Champaign"]
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

target_counts = {
    "Keynote Speaker": 20,
    "Plenary Speaker": 20,
    "Poster Presenter": 20,
    "Delegate": 20,
    "Student Speaker": 20,
    "Committee Speaker": 20
}

current_counts = {
    "Keynote Speaker": 3,
    "Plenary Speaker": 3,
    "Poster Presenter": 3,
    "Delegate": 3,
    "Student Speaker": 8,
    "Committee Speaker": 6
}

next_id = 900 # Safe starting point to avoid ID clashes with existing ones

new_entries_str = ""

for category, target in target_counts.items():
    current = current_counts[category]
    needed = target - current
    for _ in range(needed):
        speaker = {
            "id": next_id,
            "name": f"{random.choice(first_names)} {random.choice(last_names)}",
            "title": random.choice(titles),
            "affiliation": random.choice(universities),
            "category": category,
            "image": random.choice(images)
        }
        next_id += 1
        
        # Format as JS object string
        entry = (
            "    {\n"
            f"        id: {speaker['id']},\n"
            f"        name: \"{speaker['name']}\",\n"
            f"        title: \"{speaker['title']}\",\n"
            f"        affiliation: \"{speaker['affiliation']}\",\n"
            f"        category: \"{speaker['category']}\",\n"
            f"        image: \"{speaker['image']}\"\n"
            "    },\n"
        )
        new_entries_str += entry

file_path = "speakersData.js"
with open(file_path, "r", encoding='utf-8') as f:
    content = f.read()

# Find the last closing bracket
last_bracket_index = content.rfind("];")

if last_bracket_index != -1:
    new_content = content[:last_bracket_index] + ",\n" + new_entries_str + "\n];\n"
    with open(file_path, "w", encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully appended speakers.")
else:
    print("Could not find closing bracket.")
