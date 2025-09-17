import os

def rename_files_to_lowercase():
    current_dir = os.getcwd()
    for filename in os.listdir(current_dir):
        old_path = os.path.join(current_dir, filename)
        if os.path.isfile(old_path):
            new_filename = filename.lower()
            new_path = os.path.join(current_dir, new_filename)
            if old_path != new_path:
                os.rename(old_path, new_path)
                print("%s -> %s" % (filename, new_filename))

if __name__ == "__main__":
    rename_files_to_lowercase()