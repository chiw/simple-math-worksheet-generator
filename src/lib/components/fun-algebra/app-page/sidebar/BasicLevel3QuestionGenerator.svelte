<script lang="ts">
    import * as m from "@inlang/paraglide-js/simple-math-worksheet-generator/messages";

    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl3QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numARange} label="{m.funalgebrabasiclvl3questionnumarange()}" />

    
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numBRange} label="{m.funalgebrabasiclvl3questionnumbrange()}" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl3QuestionGeneratorConfigStore.numCRange} label="{m.funalgebrabasiclvl3questionnumcrange()}" />
</div>

<style>    
</style>