<script>
	let htmlContent = '';
	fetch('https://create.roblox.com/docs/education/intro-to-studio/project-intro-and-file-set-up')
		.then((response) => {
			console.dir(response);
			return response.text();
		})
		.then((html) => {
			htmlContent = html;
		});
</script>

<h1>This is your component</h1>
<p>
	{@html htmlContent}
</p>
