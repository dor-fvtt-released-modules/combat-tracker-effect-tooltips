Hooks.on("renderCombatTracker", (app, html, user) => {
    // Find all effect icons in the combat tracker
    const effectIcons = html.find(".token-effect");
    
    // For each effect icon, get the path of its image, then compare that to the effects on the actor to find the effect name.
    // Then, if a match is found, set the effect name as the icon label.
    effectIcons.each(function (i) {
        const rawPath = this.getAttribute("src");

        const combatantId = $(this).closest(".combatant").data("combatant-id");
        const combatant = game.combat?.combatants?.get(combatantId);
        const effect = combatant?.actor?.data?.effects?.find(e => e.data.icon === rawPath);
        if (effect) {
            // Active effects based effect label
            this.title = effect.data.label;
        }
    });
});