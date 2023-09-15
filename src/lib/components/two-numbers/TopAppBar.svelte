<script lang="ts">

    // SMUI IconButton
    import IconButton from '@smui/icon-button';

    // SMUI Tooltip
    import Tooltip, { Wrapper } from '@smui/tooltip';

    import { SimpleMathQuestionUtils } from '$lib/utils/simple-math-question-utils';
    import {
      twoNumbersQuestionGeneratorConfigStore,
      twoNumbersWorksheetDataStore,      
    } from '$lib/stores/two-numbers';

    function generateWorksheet() {
      twoNumbersWorksheetDataStore.update((worksheetData) => SimpleMathQuestionUtils.generateTwoNumbersQuestions(
        $twoNumbersQuestionGeneratorConfigStore));
    }

    // import stores
    import {
        twoNumberWorksheetConfigStore
    } from "$lib/stores/two-numbers";

    import { triggerPrinter } from '$lib/utils/print-utils';
    function printWorksheet() {
      triggerPrinter($twoNumberWorksheetConfigStore.worksheetSize);
    }
</script>

<Wrapper>
  <IconButton class="material-icons" on:click="{generateWorksheet}">play_circle</IconButton>
  <Tooltip>Generate worksheet</Tooltip>
</Wrapper>

<Wrapper>
  <IconButton class="material-icons" on:click="{printWorksheet}">print</IconButton>
  <Tooltip>Print</Tooltip>
</Wrapper>


<style>
</style>