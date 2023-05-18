import Jatekter from "../Jatekter.js";

QUnit.module("vizszintes teszteles", function(hooks) {

    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test("ures", function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "   @   @   @");
    });

    QUnit.test("x gyozelem", function(assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", "O", " ", " "];
        assert.equal(jatekter.getVizszintes(), "XXX@ O @O  @");
    });

    QUnit.test("o gyozelem", function(assert) {
        jatekter.lista = ["O", "O", "O", " ", "X", " ", "X", " ", " "];
        assert.equal(jatekter.getVizszintes(), "OOO@ X @X  @");
    });

    QUnit.test("egymas mellett space", function(assert) {
        jatekter.lista = ["O", "O", "O", " ", " ", " ", "X", " ", " "];
        assert.equal(jatekter.getVizszintes(), "OOO@   @X  @");
    });

    QUnit.test("veletlen, nincs nyeres", function(assert) {
        jatekter.lista = ["X", " ", "X", "O", " ", "X", " ", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "X X@O X@ XO@");
    });

    QUnit.test("minden ki van toltve, nincs nyeres", function(assert) {
        jatekter.lista = ["X", "O", "X", "O", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "XOX@OOX@XXO@");
    });

    QUnit.test("minden ki van toltve, nincs nyeres", function(assert) {
        jatekter.lista = ["X", "X", "X", "O", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "XXX@OOX@XXO@");
    });

    QUnit.test("asd", function(assert) {
        jatekter.lista = [" ", " ", "X", " ", " ", " ", " ", " ", "O"];
        assert.equal(jatekter.getVizszintes(), "  X@   @  O@");
    });

});

QUnit.module("fuggoleges teszteles", function(hooks) {

    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test("ures", function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "   @   @   @");
    });

    QUnit.test("x gyozelem", function(assert) {
        jatekter.lista = ["O", "O", "X", " ", "O", "X", "O", " ", "X"];
        assert.equal(jatekter.getFuggoleges(), "O O@OO @XXX@");
    });

    QUnit.test("o gyozelem", function(assert) {
        jatekter.lista = ["X", "X", "O", " ", "X", "O", "X", " ", "O"];
        assert.equal(jatekter.getFuggoleges(), "X X@XX @OOO@");
    });

    QUnit.test("egymas mellett space", function(assert) {
        jatekter.lista = ["O", "O", "O", " ", " ", " ", "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "O X@O  @O  @");
    });

    QUnit.test("veletlen, nincs nyeres", function(assert) {
        jatekter.lista = ["X", " ", "X", "O", " ", "X", " ", "X", "O"];
        assert.equal(jatekter.getFuggoleges(), "XO @  X@XXO@");
    });


    QUnit.test("minden ki van toltve, nincs nyeres", function(assert) {
        jatekter.lista = ["X", "X", "X", "O", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getFuggoleges(), "XOX@XOX@XXO@");
    });

    QUnit.test("asd", function(assert) {
        jatekter.lista = [" ", " ", "X", " ", " ", " ", " ", " ", "O"];
        assert.equal(jatekter.getFuggoleges(), "   @   @X O@");
    });

});

QUnit.module("atlo teszteles", function(hooks) {

    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test("ures", function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.getAtlo(), "   @   ");
    });

    QUnit.test("x gyozelem", function(assert) {
        jatekter.lista = ["X", "O", "X", " ", "X", "X", "O", "X", "O"];
        assert.equal(jatekter.getAtlo(), "XXO@XXO");
    });

    QUnit.test("o gyozelem", function(assert) {
        jatekter.lista = ["O", "X", "X", " ", "O", " ", "X", " ", "O"];
        assert.equal(jatekter.getAtlo(), "OOO@XOX");
    });

    QUnit.test("egymas mellett space", function(assert) {
        jatekter.lista = ["O", "O", "O", " ", " ", " ", "X", " ", " "];
        assert.equal(jatekter.getAtlo(), "O  @O X");
    });

    QUnit.test("veletlen, nincs nyeres", function(assert) {
        jatekter.lista = ["X", " ", "X", "O", " ", "X", " ", "X", "O"];
        assert.equal(jatekter.getAtlo(), "X O@X  ");
    });


    QUnit.test("minden ki van toltve, nincs nyeres", function(assert) {
        jatekter.lista = ["X", "X", "X", "O", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getAtlo(), "XOO@XOX");
    });

    QUnit.test("asd", function(assert) {
        jatekter.lista = [" ", " ", "X", " ", " ", " ", " ", " ", "O"];
        assert.equal(jatekter.getAtlo(), "  O@X  ");
    });

});

QUnit.module("ellenorzes", function(hooks) {

    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test("ures", function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.ellenorzes(), "");
    });

    QUnit.test("X nyer", function(assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", "O", " ", " "];
        assert.equal(jatekter.ellenorzes(), "X");
    });

    QUnit.test("o gyozelem", function(assert) {
        jatekter.lista = ["O", "O", "O", " ", "X", " ", "X", " ", " "];
        assert.equal(jatekter.ellenorzes(), "O");
    });

    QUnit.test("veletlen, nincs nyeres", function(assert) {
        jatekter.lista = ["X", " ", "X", "O", " ", "X", " ", "X", "O"];
        assert.equal(jatekter.ellenorzes(), "");
    });

});