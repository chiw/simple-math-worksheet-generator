<script lang="ts">
	import { onMount } from 'svelte';    
    import { goto } from '$app/navigation';

    import { appSelectedFunctionStore } from '$lib/stores/AppStores';

    import { getAppFunctionById } from '$lib/constants';

    // SMUI select
    import Select, { Option } from '@smui/select';    
    import { AppFunctionSelectList, type AppFunctionType } from '$lib/constants';

    let selectedFunction: AppFunctionType = getAppFunctionById($appSelectedFunctionStore);

    const onSelectedFunctionChange = (selectedFunction: AppFunctionType) => {
        console.log('selectedFunction id[' + selectedFunction.id + ']' 
            + ' label[' + selectedFunction.label + ']' 
            + ' route[' + selectedFunction.route+ ']'
        );
        $appSelectedFunctionStore = selectedFunction.id;
        goto(selectedFunction.route);
    }

    onMount(() => {
        console.log('AppFunctionSelect onMount $appSelectedFunctionStore=[' + $appSelectedFunctionStore + ']');
        selectedFunction = getAppFunctionById($appSelectedFunctionStore);
        console.log('AppFunctionSelect onMount selectedFunction.id=[' + selectedFunction.id + ']');

    });
</script>

    <Select
        key={(appFunction) => `${appFunction ? appFunction.id : ''}`} 
        bind:value={selectedFunction} 
        label="Worksheet"
        on:SMUISelect:change={onSelectedFunctionChange(selectedFunction)}>
        {#each AppFunctionSelectList as appFunction (appFunction.label)}
            <Option value={appFunction}>{appFunction.label}</Option>
        {/each}
    </Select>

<style>    
</style>