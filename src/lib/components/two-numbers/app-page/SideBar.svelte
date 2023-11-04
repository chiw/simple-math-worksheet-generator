<script lang="ts">
    import * as m from "@inlang/paraglide-js/simple-math-worksheet-generator/messages";

    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // import contants    
    import { MATH_OPERATORS } from '$lib/constants/MathsConstants';

    // import stores
    import { questionGeneratorConfigStore } from '../stores';
</script>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$questionGeneratorConfigStore.firstNumRange} label={m.questiongeneratorfirstnumrange()} />


    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            {m.questiongeneratorreverse()}
        </span>
    </FormField>
 </div>


 <div>
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
        <Checkbox bind:checked={$questionGeneratorConfigStore.allowRemainder} />
        <span slot="label">{m.questiongeneratorallowremainder()}</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$questionGeneratorConfigStore.randomOrder} />
        <span slot="label">{m.questiongeneratorrandomorder()}</span>
    </FormField>
 </div>

<Set chips={MATH_OPERATORS} let:chip filter bind:selected={$questionGeneratorConfigStore.questionOperator}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>



<style>
</style>