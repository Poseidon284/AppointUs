import search
import pandas as pd

df = pd.read_csv(".\\description.csv")

searcher = search.Search()

print("Initializing and saving models. This will be done only once.")
searcher.run(df['Description'], query=None)  

print("Model initialization complete.")
