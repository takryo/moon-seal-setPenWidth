importJS([ "lib/MOON.js", "lib/enchant.js", "lib/ui.enchant.js",
		"lib/color.enchant.js", "lib/stylus.enchant.js",
		"lib/puppet.enchant.js", "lib/moon.puppet.enchant.js" ], function() {
	enchant();
	enchant.puppet.prepareTheatre({
		assets : []
	});
	var ASK_PEN_WIDTH_MESSAGE = "ペンの太さを入力してください。";
	var INVALID_MESSAGE = "入力された値は無効です。";
	var COMPLETE_MESSAGE = "ペンの太さを設定しました。";

	function alertThenFinish(message) {
		MOON.alert(message, function() {
			MOON.finish();
		});
	}
	function askPenWidth() {
		MOON.penPrompt(ASK_PEN_WIDTH_MESSAGE, function(width) {
			if (width === null || width === '') {
				alertThenFinish(INVALID_MESSAGE);
			} else {
				setPenWidth(width);
			}
		});
	}

	function setPenWidth(width) {
		MOON.setPenWidth("" + width);
		alertThenFinish(COMPLETE_MESSAGE);
	}

	StickerPuppet.create("ペンの太さを設定", {
		behavior : [ {
			stickertap : function(event) {
				askPenWidth();
				enchant.puppet.stopTheatre();
			},
			stickerattach : function(event) {
				enchant.puppet.stopTheatre();
			},
			stickerdetach : function(event) {
				enchant.puppet.stopTheatre();
			}
		} ]
	});
});