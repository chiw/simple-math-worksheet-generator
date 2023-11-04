<script lang="ts">
    import * as m from "@inlang/paraglide-js/simple-math-worksheet-generator/messages";

    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    import { questionGeneratorConfigStore } from '../stores';	
	
</script>

<div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.firstNumRange} label={m.questiongeneratorallowremainder()} />


    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            {m.questiongeneratorreverse()}
        </span>
    </FormField>

    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.secondNumRange} label="{m.questiongeneratorsecondnumrange()}" />


    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.secondNumReverse} />
        <span slot="label">
            {m.questiongeneratorreverse()}
        </span>
    </FormField>
 </div>

 <div>
    <Textfield style="margin-left:0.5em" 
        bind:value={$questionGeneratorConfigStore.resultMin} label="{m.questiongeneratorresultmin()}" type="number" />
    
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.resultMax} label="{m.questiongeneratorresultmax()}" type="number" />
    </div>
    
    <div>
    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowNegative} />
        <span slot="label">{m.questiongeneratorallownegative()}</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.randomOrder} />
        <span slot="label">{m.questiongeneratorrandomorder()}</span>
    </FormField>
 </div>

<style>
</style>