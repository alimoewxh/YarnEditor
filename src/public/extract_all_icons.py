# extract_all_icons.py
import re
import sys
import os

def extract_all(input_file, output_dir):
    f = open(input_file, "r")
    svg_content = f.read()
    f.close()

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # capture entire <symbol ...>...</symbol>
    pattern = re.compile(r'(<symbol[^>]*id=["\']([^"\']+)["\'][^>]*>)(.*?)</symbol>', re.S)
    matches = pattern.findall(svg_content)

    if not matches:
        print("No symbols found.")
        return

    for symbol_open, symbol_id, inner in matches:
        # try to extract viewBox from <symbol ...>
        viewbox_match = re.search(r'viewBox="([^"]+)"', symbol_open)
        viewbox = viewbox_match.group(1) if viewbox_match else "0 0 24 24"

        new_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="{}">\n{}\n</svg>'.format(
            viewbox, inner.strip()
        )

        out_path = os.path.join(output_dir, symbol_id + ".svg")
        f_out = open(out_path, "w")
        f_out.write(new_svg)
        f_out.close()

        print("Generated:", out_path)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_all_icons.py icons.svg output_dir")
    else:
        extract_all(sys.argv[1], sys.argv[2])
