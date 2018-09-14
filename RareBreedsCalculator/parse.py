
# gets total amount of horses of that breed
def get_total(amounts):
    stallions = amounts[0].split(' ')
    mares = amounts[1].split(' ')
    # geldings = amounts[2].split(' ')
    total = int(stallions[0]) + int(mares[0])
    return total

rare_breeds = []
# open file and parse line by line
with open("data.txt", "r", encoding="utf8") as inf:
    for line in inf:
        separated = line.strip().split('\t')
        total = get_total(separated[-3:])
        
        if total < 300:
            separated.append(total)
            rare_breeds.append(separated)
    
    inf.close()

# write to outfile
with open("result.txt", "w") as outf:
    rare_breeds.sort(key=lambda x: x[-1])
    for line in rare_breeds:
        outf.write(line[0])
        outf.write("    [b]Hengsten:[/b] ")
        outf.write(line[-4])
        outf.write("    [b]Merries:[/b] ")
        outf.write(line[-3])
        outf.write("    [b]Totaal:[/b] ")
        outf.write(str(line[-1]))
        outf.write("\n")

    outf.write("\n [b]Aantal rassen:[/b] " + str(len(rare_breeds)))
    outf.close()