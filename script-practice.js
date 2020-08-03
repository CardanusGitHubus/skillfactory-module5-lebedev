const BtnCreate = $('#button-create');
const BtnReplace = $('#button-result');
const textField = $('#result');
const var1Field = $('.var1');
const var2Field = $('.var2');
const var3Field = $('.var3');
const var4Field = $('.var4');
const var5Field = $('.var5');
const var6Field = $('.var6');
const speachField = $('.speach');

const startObj = {
    "text":[
        "Жили-были {var1} да {var2}. ",
        "Была у них {var3}. ",
        "Снесла {var3} {var4}, не простое - золотое. ",
        "- {var1} бил, бил - не разбил",
        "- {var2} била, била - не разбила. ",
        "{var5} бежала, {var6} задела, {var4} упало и разбилось. ",
        "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
        "{speach}."
    ]
};


BtnCreate.click(function() {
    textField.html(startObj.text);
});

BtnReplace.click(function() {
    const var1 = var1Field.val();
    const var2 = var2Field.val();
    const var3 = var3Field.val();
    const var4 = var4Field.val();
    const var5 = var5Field.val();
    const var6 = var6Field.val();
    const speach = speachField.val();

    const newObj = {
        "text":[
            `Жили-были ${var1} да ${var2}. `,
            `Была у них ${var3}. `,
            `Снесла ${var3} ${var4}, не простое - золотое. `,
            `- ${var1} бил, бил - не разбил`,
            `- ${var2} била, била - не разбила. `,
            `${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
            `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
            `${speach}.`
        ]
    };
    
    textField.html(newObj.text);

});
