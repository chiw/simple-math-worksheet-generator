<script lang="ts">
    import * as m from "@inlang/paraglide-js/simple-math-worksheet-generator/messages";

    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl2QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numARange} label="{m.funalgebrabasiclvl2questionnumarange()}" />

    
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numBRange} label="{m.funalgebrabasiclvl2questionnumbrange()}" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl2QuestionGeneratorConfigStore.numCRange} label="{m.funalgebrabasiclvl2questionnumcrange()}" />
</div>

<style>    
</style>