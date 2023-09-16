<script lang="ts">
    // SMUI text input
    import Textfield from '@smui/textfield';

    // SMUI checkbox
    import FormField from '@smui/form-field';
    import Checkbox from '@smui/checkbox';

    // SMUI chip
    import Chip, { Set, Text as ChipText } from '@smui/chips';

    // import contants
    import { LargeScreenMinWidth } from '$lib/constants/AppConstants';
    import { MATH_OPERATORS } from '$lib/constants/MathsConstants';

    // import stores
    import { twoNumbersQuestionGeneratorConfigStore } from '$lib/stores/two-numbers';
</script>

 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$twoNumbersQuestionGeneratorConfigStore.firstNumRange} label="1st Number range" />


    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.firstNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>
 </div>


 <div>
    <Textfield style="margin-left:0.5em"
        bind:value={$twoNumbersQuestionGeneratorConfigStore.secondNumRange} label="2nd Number range" />


    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.secondNumReverse} />
        <span slot="label">
            Reverse
        </span>
    </FormField>
 </div>

 <div>
    <Textfield style="margin-left:0.5em" 
        bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMin} label="Result min value" type="number" />
    
    <Textfield style="margin-left:0.5em"
        bind:value={$twoNumbersQuestionGeneratorConfigStore.resultMax} label="Result max value" type="number" />
    </div>
    
    <div>
    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowNegative} />
        <span slot="label">Allow negative</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.allowRemainder} />
        <span slot="label">Allow remainder</span>
    </FormField>

    <FormField>
        <Checkbox bind:checked={$twoNumbersQuestionGeneratorConfigStore.randomOrder} />
        <span slot="label">Random Order</span>
    </FormField>
 </div>

<Set chips={MATH_OPERATORS} let:chip filter bind:selected={$twoNumbersQuestionGeneratorConfigStore.questionOperator}>
    <Chip {chip} touch>
        <ChipText>{@html chip}</ChipText>
    </Chip>
</Set>



<style>
</style>