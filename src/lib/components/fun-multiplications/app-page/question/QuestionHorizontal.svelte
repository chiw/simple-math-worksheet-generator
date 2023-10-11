<script lang="ts">
	// number blocks cartoon PNG img
	import numberBlocks_01 from "$lib/images/numberblocks/numberBlocks_01.png";
	import numberBlocks_02 from "$lib/images/numberblocks/numberBlocks_02.png";
	import numberBlocks_03 from "$lib/images/numberblocks/numberBlocks_03.png";
	import numberBlocks_04 from "$lib/images/numberblocks/numberBlocks_04.png";
	import numberBlocks_05 from "$lib/images/numberblocks/numberBlocks_05.png";
	import numberBlocks_06 from "$lib/images/numberblocks/numberBlocks_06.png";
	import numberBlocks_07 from "$lib/images/numberblocks/numberBlocks_07.png";
	import numberBlocks_08 from "$lib/images/numberblocks/numberBlocks_08.png";
	import numberBlocks_09 from "$lib/images/numberblocks/numberBlocks_09.png";
	import numberBlocks_10 from "$lib/images/numberblocks/numberBlocks_10.png";
	
	export let width = '300px';
	export let height = '300px';
	export let fontSize = '15px';
	export let firstNumber = '1';
	export let showFirstNumber: boolean = true;
	export let secondNumber = '1';
	export let showSecondNumber: boolean = true;
	export let operator = '';
	export let answer = '';
	export let showAnswer: boolean = false;

	export let numberBoxMargin = '0';
	export let operatorBoxMargin = '0';
	export let questionContainerMargin = '';

	export let blockColor = "#4F7942";

</script>

<div class="funMultiplicationQuestionContainer">
	<div class="imgSectionContainer">
		{#each Array(parseInt(secondNumber)) as _, index (index)}
			<div class="imgGroupContainer">
				<!-- {#each Array(parseInt(firstNumber)) as _, index(index)} -->				
					<!-- <img src={oneDollarCoinImg} alt="apple" class="smallIcon"/> -->

					{#if parseInt(firstNumber) === 1}
						<img src={numberBlocks_01} alt="numberBlocks_01" class="numberBlocks_01" />
					{/if}

					{#if parseInt(firstNumber) === 2}
						<img src={numberBlocks_02} alt="numberBlocks_02" class="numberBlocks_02" />
					{/if}

					{#if parseInt(firstNumber) === 3}
						<img src={numberBlocks_03} alt="numberBlocks_03" class="numberBlocks_03" />
					{/if}

					{#if parseInt(firstNumber) === 4}
						<img src={numberBlocks_04} alt="numberBlocks_04" class="numberBlocks_04" />
					{/if}

					{#if parseInt(firstNumber) === 5}
						<img src={numberBlocks_05} alt="numberBlocks_05" class="numberBlocks_05" />
					{/if}

					{#if parseInt(firstNumber) === 6}
						<img src={numberBlocks_06} alt="numberBlocks_06" class="numberBlocks_06" />
					{/if}

					{#if parseInt(firstNumber) === 7}
						<img src={numberBlocks_07} alt="numberBlocks_07" class="numberBlocks_07" />
					{/if}

					{#if parseInt(firstNumber) === 8}
						<img src={numberBlocks_08} alt="numberBlocks_08" class="numberBlocks_08" />
					{/if}

					{#if parseInt(firstNumber) === 9}
						<img src={numberBlocks_09} alt="numberBlocks_09" class="numberBlocks_09" />
					{/if}

					{#if parseInt(firstNumber) === 10}
						<img src={numberBlocks_10} alt="numberBlocks_10" class="numberBlocks_10" />
					{/if}


					<!-- {#if parseInt(firstNumber) < 5 && parseInt(firstNumber) % 2 == 0}
						<NumberBlocksGrid col={2} value={parseInt(firstNumber)} color={blockColor} />
					{:else if parseInt(firstNumber) % 4 === 0}
						<NumberBlocksGrid col={4} value={parseInt(firstNumber)} color={blockColor} />
					{:else if parseInt(firstNumber) % 3 === 0}
						<NumberBlocksGrid col={3} value={parseInt(firstNumber)} color={blockColor} />
					{:else}
						<NumberBlocksGrid col={2} value={parseInt(firstNumber)} color={blockColor} />
					{/if} -->
					
				<!-- {/each} -->
			</div>
		{/each}
	</div>

	<div class="questionContainer" style="--fontSize:{fontSize};--questionContainerMargin:{questionContainerMargin}">
		<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">			
			{showFirstNumber ? firstNumber : ''}
		</div>
		<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">
			{@html operator}
		</div>
		<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
			{showSecondNumber ? secondNumber : ''}
		</div>
		<div class="operatorBox" style="--height:{height};--operatorBoxMargin:{operatorBoxMargin}">=</div>
		<div class="numberBox" style="--height:{height};--width:{width};--numberBoxMargin:{numberBoxMargin}">
			{showAnswer ? answer : ''}
		</div>
	</div>
</div>

<style>
	div.funMultiplicationQuestionContainer {
		display: flex;
		flex-direction: row;
		border: solid 1px;
		border-color: black;
		border-radius: 0rem;
		padding: 0.2rem;
		margin: 0rem;
		width:95%;
		height: 25mm;
	}

	div.imgSectionContainer {
		display: flex;
		flex-flow: row wrap;

		justify-content: flex-start;
  		align-items: center;
		max-height: 70mm;
		width: 140mm;
	}

	div.imgGroupContainer {
		display: flex;		
		flex-flow: row wrap;
		border: solid 0px;
		border-radius: 0rem;
		border-color: black;
		padding: 0.1rem;
		margin: 0.1rem;
	}

	img.smallIcon {
		width: 2rem;
		height: 2rem;
	}

	img.numberBlocks_01 {
		height: 20mm;
	}

	img.numberBlocks_02 {
		height: 20mm;
	}

	img.numberBlocks_03 {
		height: 25mm;
	}

	img.numberBlocks_04 {
		height: 15mm;
	}

	img.numberBlocks_05 {
		height: 25mm;
	}

	img.numberBlocks_06 {
		height: 18mm;
		
	}

	img.numberBlocks_07 {
		height: 25mm;
	}

	img.numberBlocks_08 {
		height: 17mm;
	}

	img.numberBlocks_09 {
		height: 15mm;
	}

	img.numberBlocks_10 {
		height: 25mm;
	}

	div.questionContainer {
		display: flex;
		flex-wrap: wrap;
		color: black;
		font-family: Verdana, sans-serif;
		font-stretch: expanded;
		text-align: center;
		font-size: var(--fontSize);
		margin: var(--questionContainerMargin);
		
		justify-content: center;
  		align-items: center;

		margin-left: auto;
	}
	div.numberBox {
		width: var(--width);
		height: var(--height);
		margin: var(--numberBoxMargin);
		padding: 0px;
		border: 1px solid;
		border-radius: 5px;
	}
	div.operatorBox {
		height: var(--height);
		margin: var(--operatorBoxMargin);
		padding: 0px;
	}
</style>