'use strict';

exports.BattleScripts = {
	init: function () {
		this.modData('Movedex', 'scald').onEffectiveness = function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Water', type);
		};
		this.modData('Movedex', 'steameruption').onEffectiveness = function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Water', type);
		};
		this.modData('Movedex', 'scald').type = 'Fire';
		this.modData('Movedex', 'steameruption').type = 'Fire';
		this.modData('Statuses', 'sunnyday').duration = 0;
		this.modData('Statuses', 'sunnyday').durationCallback = 0;
		let pdex=this.data['Pokedex'];
		for(let x in pdex){
			let learnset=this.getLearnset(x);
			if(learnset){
				console.log(learnset);
				if(learnset.iceshard)this.modData('Learnsets', x).learnset.aquajet=["7M", "5M"];
				if(learnset.iciclecrash)this.modData('Learnsets', x).learnset.waterfall=["7M", "5M"];
				if(pdex[x].types.includes('Ice')) this.modData('Learnsets', x).learnset.liquidation=["7M", "5M"];
				if(pdex[x].types.includes('Ice')) this.modData('Learnsets', x).learnset.surf=["7M", "5M"];
				if(pdex[x].types.includes('Fire')) this.modData('Learnsets', x).learnset.earthpower=["7M", "5M"];
				if(pdex[x].types.includes('Fire')) this.modData('Learnsets', x).learnset.earthquake=["7M", "5M"];
				if(pdex[x].types.includes('Water')) this.modData('Learnsets', x).learnset.scald=["7M", "5M"];
				if(pdex[x].types.includes('Water')) this.modData('Learnsets', x).learnset.firepunch=["7M", "5M"];
				for(let y in pdex[x].abilities){
					if(pdex[x].abilities[y]=='Ice Body')pdex[x].abilities[y]='Water Veil';
				}
			}
		};
	},
};
