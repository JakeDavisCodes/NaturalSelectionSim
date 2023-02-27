var Creature = require('./creature.js').default;
var Field = /** @class */ (function () {
    function Field(fieldSize, creatureCount) {
        if (fieldSize === void 0) { fieldSize = 20; }
        if (creatureCount === void 0) { creatureCount = 50; }
        this.creatures = new Array();
        this.fieldSize = fieldSize;
        this.creatureCount = creatureCount;
        this.creatures = new Array();
    }
    Field.prototype.populate = function () {
        this.creatures = [];
        for (var i = 0; i < this.creatureCount; i++) {
            this.createCreature();
        }
    };
    Field.prototype.createCreature = function () {
        console.log(Creature)
        this.creatures.push(new Creature);
    };
    return Field;
}());
exports["default"] = Field;
