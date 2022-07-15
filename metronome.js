class Metronome
{
	constructor()
	{
		this.active = false;
		this.bpm = 120;
		this.npb = 4;
	}

	change_bpm(bpm)
	{
		if (bpm < 30)
		{
			this.bpm = 30;
		}
		else if (bpm > 360)
		{
			this.bpm = 360
		}
		else
		{
			this.bpm = bpm;
		}
	}

	async toggle()
	{
		if (this.active === false)
		{
			this.active = true;

			this.count();
		}
		else
		{
			this.active = false;
		}
	}

	count()
	{
		const round = () =>
		{
			setTimeout(() =>
			{
				if (this.active === true)
				{
					console.log("beep");
					round();
				}
			}, 60000 / this.bpm);
		}

		round();
	}
}
const metronome = new Metronome();
console.log(metronome);

const button = document.getElementById("toggle");
const bpm_input = document.getElementById("bpm");
const npb_input = document.getElementById("npb");

button.addEventListener("click", () => {metronome.toggle();});
bpm_input.addEventListener("input", () => 
{
	let bpm;

	if (isNaN(bpm_input.value))
	{
		bpm_input.value = "120";
		bpm = 120;
	}
	else
	{
		bpm = +bpm_input.value;		
	}

	if (bpm < 30)
	{
		bpm = 30;
	}
	else if (bpm > 360)
	{
		bpm = 360
	}

	metronome.change_bpm(bpm);
});