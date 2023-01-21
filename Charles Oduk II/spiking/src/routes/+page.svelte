<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from '../api';

	interface Task {
		userId: number;
		id: number;
		title: string;
		completed: boolean;
	}

	let data: Task[];

	onMount(async () => {
		data = await get('todos');
	});
</script>
<h1>Tasks</h1>
<ol>
	{#if data}
		{#each data as { userId, id, title, completed }}
			<li>
				{title}
				<br />
				{#if completed}
					<span>✅ Completed </span>
				{:else}
					<span>❌ Not Completed</span>
				{/if}
			</li>
		{/each}
	{/if}
</ol>