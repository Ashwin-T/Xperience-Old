global.fetch = require("node-fetch");
let fs = require('fs');
fs.readFile('./CourseCatalog20212022.html', 'utf-8', (err, data)=>{
	err && console.log(err)
	const out = {}
	Array.from(data.matchAll(/<span class=".*?">([A-Za-z.0-9\-/: &amp;]+?)[( &nbsp;)( &ndash;)]*?([A-Z][A-Z][A-Z0-9][0-9/]+?)[( &nbsp;)]*?</gm))
		.forEach(e=>{
			const className = e[1].replace(/&amp;/g, '&').replace(/ &nbsp;/g, ' ').replace(/&rsquo;/g, '\'');
			out[className] = {code:e[2].replace('/', '-')}
			/*out[className]['desc'] = data.slice(e.index+e[0].length)
				.match(/<\/table><p class="[A-Z0-9a-z ]+?"><span class="[A-Z0-9a-z ]+?">(.+?)(<\/span><\/p><p class="c1">|(COURSE)|(<span style=))/)[1]
				.replace(/&amp;/g, '&')
				.replace(/ &nbsp;/g, ' ')
				.replace(/&rsquo;/g, '\'')
				.replace(/<span class="[A-Za-z0-9 ]+?">/g, '')
				.replace(/<p class="[A-Za-z0-9 ]+?">/g, '')
				.replace(/<\/p>/g, '')
				.replace(/<hr style=".*?">/g, '')
				.replace(/<\/span>/g, '')
				.replace(/&amp;/g, '&')
				.replace(/&nbsp;/g, '')
				.replace(/&rsquo;/g, '\'')
				.replace(/&ndash;/g, '-');
				*/
		});

		/*
		always misses
			[
				(replace F HC0020  S HC0030  J HC0040 S with)
				"AVID":{
					"code":"HC0020-30-40-50",
					"desc":"AVID, Advancement Via Individual Determination, is a course designed to support students underrepresented in higher education. It engages students in the writing process, inquiry method, and collaborative learning to improve critical thinking and communication skills. Students review study skills, especially note-taking, test-taking, and time management skills. The course helps prepare students for college entrance examinations and promotes individual responsibility for college preparation and continual learning. AVID students have tutorial support services twice a week and also participate in service learning."
				},
				"APP AND GAME DESIGN":{
					"code":"BC1018",
					"desc":"Students learn to create mobile apps, 2D games and 3D games using the Unity Game Engine and the C# programming language. Students will spend the first semester of the year creating 2D mobile apps and games. Students will spend the second semester working in 3D, with more complex geometry, modeling, texturing and lighting. Students study Game Design and theories of Play. Students practice creativity and design thinking. Students work in collaborative groups to create long term projects. Students learn to playfully mod existing games as well as create their own concepts from scratch. Students learn other development concepts such as: rapid prototyping, iterative development process, market research, playtesting, creating game art, game mechanics, and programming in C# (e.g. player movement, gravity, physics, collision detection, scene selection, animation, and more)."
				},
				"ADVANCED COMPUTER SCIENCE":{
					"code":"BC1019",
					"desc":"Advanced Computer Science aims to be a class where students work to expand deeper into their programming knowledge. &nbsp;This course will have an emphasis on building and applying concepts in data structures. Students will learn such topics as generics, sets, linked lists, hashtable, queues, stacks, maps, and trees. Students will develop applications pertaining to each data structure and evaluate their performance analysis. In addition, students will explore and utilize concepts in search, sorting, design, file i/o, networking, and multithreading."
				},
				"ACTING II {
					"code":"JC1420"
				}
			]
		    "APP AND GAME DESIGN" "BC1018", look for '&' classname
			"ADVANCED COMPUTER SCIENCE" "BC1019",
			"ACTING II" "JC1420" (included in acting 3 class name)
			Desc messups:
				PHOTOGRAPHY I
					This is a basic course in the principles of black and white photography. Students see their world through the lens of a 35mm camera. Students will take photographs, process film, make proof sheets, choose images to enlarge, and manipulate prints through burning, dodging, and the use of filters. Students are involved in the critique process through group activities including Socratic seminars. Students analyze, interpret and make informed judgments of works of art. Preparing prints for presentation will include spotting, dry mounting and matting. In addition, the history of photography will be introduced through slide lectures, research, and small group discussion. A limited number of cameras are available for student use.
				CERAMICS
					This is a beginning level course in hand building and throwing. Students explore basic  theory and  techniques to form creative and functional ceramic objects. Kiln firing and glaze applications are covered. The use of the potter‘s wheel is introduced. The history of ceramics is studied through research and group activities. Oral and written critiques are part of all projects.
				WEIGHT TRAINING
					The Weight Training and Conditioning course is a standards based class that is worth elective credits. Students will improve their health and physical fitness as it relates to their desired goal of overall health &/or competitive purposes.  Students in Course 3 (10th-12th) will have the opportunity to develop and improve their fitness and conditioning levels through the means of flexibility, weight training, Plyometric, aquatic, and cardiovascular based training. Students will learn these through instruction, observation, demonstration and participation. This Course will also support the Common Core State Standards for the Reading Standards for Literacy in Science and Technical Subjects 6-12.
				AP COMPUTER SCIENCE
					AP Computer Science A is a yearlong course designed to introduce students to programming concepts leading to topics designated for AP exam. Students will be working with the JAVA programming language.  The curriculum for the AP Computer Science A course includes all topics and the course descriptions for AP Computer Science A as described by the College Board.  This course concentrates on building a strong logic foundation, working with data structures, and implementing object-oriented designs.  All students are encouraged to take the AP exam.
				
			Other notes:
			messes up the sport section
			messes up digital art & imaging description, and ELD 1 LIT/ORAL
			messes up with acting II/acting III
			messes up AP JAPANESE LANG/CULTURE, puts /CULTURE instead
			messes up TRIGINOMETRY HONORS name
		*/
	console.log(out);
	fs.writeFile('classNames2122.json', JSON.stringify(out, null, 4), error=>{
		error && console.log(error)
	});
})