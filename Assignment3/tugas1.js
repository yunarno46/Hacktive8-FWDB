var recipe = 
[
    "Panaskan air hingga mendidih.",
    "Masukkan mie ke dalam air yang mendidih.",
    "Rebus hingga 3/4 matang lalu tiriskan.",
    "Campurkan semua bumbu ke dalam piring.",
]

console.log(recipe[0]);
console.log("");

var last_step = "Masukkan mie kedalam piring, aduk hingga rata. Lalu sajikan."
recipe.push(last_step);

console.log("Langkah-langkah memasak indomie goreng :");

for(var i=1; i<=recipe.length;i++)
console.log(i + "." + recipe[i-1]);