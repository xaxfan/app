import json, os

initials_data = json.loads(open('_ini_raw.json','r',encoding='utf-8').read())
finals_data = json.loads(open('_fin_raw.json','r',encoding='utf-8').read())

def generate_svgs(letters):
    for letter in letters:
        d = f'svg/pinyin/{letter["id"]}'
        os.makedirs(d, exist_ok=True)
        for i, step in enumerate(letter['steps']):
            svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round">
  {step["svg"]}
</svg>'
            with open(f'{d}/step{i+1}.svg', 'w', encoding='utf-8') as fp:
                fp.write(svg)

generate_svgs(initials_data)
generate_svgs(finals_data)

def to_json(letters, prefix):
    return [{'id': f'{prefix}_{l["id"]}', 'name': l['id'], 'emoji': '', 'steps': [{'label': s['label'], 'svg': f'svg/pinyin/{l["id"]}/step{i+1}.svg'} for i, s in enumerate(l['steps'])]} for l in letters]

with open('js/pinyin_initials.json', 'w', encoding='utf-8') as fp:
    json.dump(to_json(initials_data, 'pinyin'), fp, ensure_ascii=False, indent=2)
with open('js/pinyin_finals.json', 'w', encoding='utf-8') as fp:
    json.dump(to_json(finals_data, 'final'), fp, ensure_ascii=False, indent=2)

print(f'Generated {len(initials_data)} initials, {len(finals_data)} finals')
