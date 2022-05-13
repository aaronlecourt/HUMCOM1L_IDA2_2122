const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const initialSelected = document.querySelector('.selected');

let selectedCategory = initialSelected.innerText.toLowerCase(); // 'landscape'

const pictures = [
	{
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11383.jpg',
		category: 'amarr'
	},
	{
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11393.jpg',
		category: 'amarr'
	},
	{
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/4302.jpg',
		category: 'amarr'
	},
	{
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24692.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/642.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/643.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23757.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24696.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16233.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/20125.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37481.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22448.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22474.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/596.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11188.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/625.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/624.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/2006.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16236.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/19720.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11190.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37604.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11965.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/20183.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/2161.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/589.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/590.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/29248.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/597.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/591.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/1944.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/19744.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11184.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/28850.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11987.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/28659.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11134.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23919.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/34317.jpg',
		category: 'amarr'
	},
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11567.jpg',
		category: 'amarr'
	},                                                      
    {//caldari
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11381.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/4306.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/638.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24688.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/640.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12729.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23915.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24698.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16227.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11959.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37482.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22446.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/601.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11192.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/632.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/621.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/623.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/620.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12731.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/32876.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16238.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/19726.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11194.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37605.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11957.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/20185.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/582.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/583.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/584.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/605.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/602.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/603.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/648.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11993.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12011.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11178.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/28710.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/672.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12032.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/29984.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23917.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/34828.jpg',
		category: 'caldari'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/3764.jpg',
		category: 'caldari'
	},                                                      
    {//gallente
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12044.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12042.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/4308.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/645.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24690.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/641.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12743.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23911.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16229.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/24700.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11971.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37483.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22466.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22442.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/606.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11172.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/633.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/634.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/627.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/626.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12745.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/32872.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/16240.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/19724.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11174.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/37607.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11969.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/20187.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/608.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/607.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/609.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/592.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/593.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/655.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/657.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/654.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/650.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12023.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12005.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/12021.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11202.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11200.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/22460.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/28848.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11989.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/28661.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11129.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/11377.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/29988.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/23913.jpg',
		category: 'gallente'
	},                                                      
    {
		url:
			'https://www.eveonlineships.com/immagini/toolkit/RendersJpg/671.jpg',
		category: 'gallente'
	}
];

const renderPictures = category => {
	pictures.forEach(picture => {
		if (picture.category === category) {
			const img = document.createElement('img');
			img.src = picture.url;
			img.srcset = picture.url;
			grid.appendChild(img);
		}
	});
};
renderPictures(selectedCategory);

categories.forEach(category => {
	category.addEventListener('click', () => {
		selectedCategory = category.innerText.toLowerCase();
		category.classList.add('selected');
		grid.innerHTML = '';
		renderPictures(selectedCategory);

		categories.forEach(categ => {
			if (categ.innerText.toLowerCase() !== selectedCategory) {
				categ.classList.remove('selected');
			}
		});
	});
});
