<script lang="ts">
    import * as m from "@inlang/paraglide-js/simple-math-worksheet-generator/messages";

    // SMUI text input
    import Textfield from '@smui/textfield';

    import { basicLvl1QuestionGeneratorConfigStore } from '../../stores';
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.ratioBToA} label="{m.funalgebrabasiclvl1questionvaluen()}" />

    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.ratioCToB} label="{m.funalgebrabasiclvl1questionvaluem()}" />
</div>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$basicLvl1QuestionGeneratorConfigStore.resultMax} label="{m.funalgebrabasiclvl1questionresultmaxvalue()}" type="number" />
</div>


<style>

</style>