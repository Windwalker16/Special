import re

# Read the input file
with open('yourfile.txt', 'r') as file:
    text = file.read()

# Regex to find only HCK numbers followed by garbage up to DRG AUDIT
pattern = r'(HCK\d{9})(?=.*?DRG AUDIT)'

matches = re.findall(pattern, text, re.DOTALL)

# Write the HCK numbers to a new file, one per line
with open('output_hck_numbers.txt', 'w') as outfile:
    for hck in matches:
        outfile.write(hck + '\n')

print(f"Extracted {len(matches)} HCK numbers and saved to 'output_hck_numbers.txt'")
