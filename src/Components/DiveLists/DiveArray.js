export function diveArrayFunction() {
	//dive class
	class Dive {
		constructor(direction, rotation, position, difficulty, cat, num, letter) {
			this.direction = direction;
			this.rotation = rotation;
			this.position = position;
			this.difficulty = difficulty;
			this.cat = cat;
			this.num = num;
			this.letter = letter;
		}
	}

	//forward
	const f101a = new Dive('Forward', 'Dive', 'Straight', '1.4', 1, 101, 'a');
	const f101b = new Dive('Forward', 'Dive', 'Pike', '1.3', 1, 101, 'b');
	const f101c = new Dive('Forward', 'Dive', 'Tuck', '1.2', 1, 101, 'c');
	const f102a = new Dive('Forward', '1 SS', 'Straight', '1.6', 1, 102, 'a');
	const f102b = new Dive('Forward', '1 SS', 'Pike', '1.5', 1, 102, 'b');
	const f102c = new Dive('Forward', '1 SS', 'Tuck', '1.4', 1, 102, 'c');
	const f103a = new Dive('Forward', '1.5 SS', 'Straight', '2.0', 1, 103, 'a');
	const f103b = new Dive('Forward', '1.5 SS', 'Pike', '1.7', 1, 103, 'b');
	const f103c = new Dive('Forward', '1.5 SS', 'Tuck', '1.6', 1, 103, 'c');
	const f104a = new Dive('Forward', '2 SS', 'Straight', '2.6', 1, 104, 'a');
	const f104b = new Dive('Forward', '2 SS', 'Pike', '2.3', 1, 104, 'b');
	const f104c = new Dive('Forward', '2 SS', 'Tuck', '2.2', 1, 104, 'c');
	const f105b = new Dive('Forward', '2.5 SS', 'Pike', '2.6', 1, 105, 'b');
	const f105c = new Dive('Forward', '2.5 SS', 'Tuck', '2.4', 1, 105, 'c');
	const f106b = new Dive('Forward', '3 SS', 'Pike', '3.2', 1, 106, 'b');
	const f106c = new Dive('Forward', '3 SS', 'Tuck', '2.9', 1, 106, 'c');
	const f107b = new Dive('Forward', '3.5 SS', 'Pike', '3.3', 1, 107, 'b');
	const f107c = new Dive('Forward', '3.5 SS', 'Tuck', '3.0', 1, 107, 'c');
	//flying
	const f112b = new Dive('Forward Flying', '1 SS', 'Pike', '1.7', 1, 112, 'b');
	const f112c = new Dive('Forward Flying', '1 SS', 'Tuck', '1.6', 1, 112, 'c');
	const f113b = new Dive(
		'Forward Flying',
		'1.5 SS',
		'Pike',
		'1.9',
		1,
		113,
		'b'
	);
	const f113c = new Dive(
		'Forward Flying',
		'1.5 SS',
		'Tuck',
		'1.8',
		1,
		113,
		'c'
	);

	//back
	const b201a = new Dive('Back', 'Dive', 'Straight', '1.7', 2, 201, 'a');
	const b201b = new Dive('Back', 'Dive', 'Pike', '1.6', 2, 201, 'b');
	const b201c = new Dive('Back', 'Dive', 'Tuck', '1.5', 2, 201, 'c');
	const b202a = new Dive('Back', '1 SS', 'Straight', '1.7', 2, 202, 'a');
	const b202b = new Dive('Back', '1 SS', 'Pike', '1.6', 2, 202, 'b');
	const b202c = new Dive('Back', '1 SS', 'Tuck', '1.5', 2, 202, 'c');
	const b203a = new Dive('Back', '1.5 SS', 'Straight', '2.5', 2, 203, 'a');
	const b203b = new Dive('Back', '1.5 SS', 'Pike', '2.3', 2, 203, 'b');
	const b203c = new Dive('Back', '1.5 SS', 'Tuck', '2.0', 2, 203, 'c');
	const b204b = new Dive('Back', '2 SS', 'Pike', '2.3', 2, 204, 'b');
	const b204c = new Dive('Back', '2 SS', 'Tuck', '2.0', 2, 204, 'c');
	const b205b = new Dive('Back', '2.5 SS', 'Pike', '3.2', 2, 205, 'b');
	const b205c = new Dive('Back', '2.5 SS', 'Tuck', '3.0', 2, 205, 'c');

	//reverse
	const r301a = new Dive('Reverse', 'Dive', 'Straight', '1.8', 3, 301, 'a');
	const r301b = new Dive('Reverse', 'Dive', 'Pike', '1.7', 3, 301, 'b');
	const r301c = new Dive('Reverse', 'Dive', 'Tuck', '1.6', 3, 301, 'c');
	const r302a = new Dive('Reverse', '1 SS', 'Straight', '1.8', 3, 302, 'a');
	const r302b = new Dive('Reverse', '1 SS', 'Pike', '1.7', 3, 302, 'b');
	const r302c = new Dive('Reverse', '1 SS', 'Tuck', '1.6', 3, 302, 'c');
	const r303a = new Dive('Reverse', '1.5 SS', 'Straight', '2.7', 3, 303, 'a');
	const r303b = new Dive('Reverse', '1.5 SS', 'Pike', '2.4', 3, 303, 'b');
	const r303c = new Dive('Reverse', '1.5 SS', 'Tuck', '2.1', 3, 303, 'c');
	const r304a = new Dive('Reverse', '2 SS', 'Straight', '2.9', 3, 304, 'a');
	const r304b = new Dive('Reverse', '2 SS', 'Pike', '2.4', 3, 304, 'b');
	const r304c = new Dive('Reverse', '2 SS', 'Tuck', '2.1', 3, 304, 'c');
	const r305b = new Dive('Reverse', '2.5 SS', 'Pike', '3.2', 3, 305, 'b');
	const r305c = new Dive('Reverse', '2.5 SS', 'Tuck', '3.0', 3, 305, 'c');

	//Inward
	const i401a = new Dive('Inward', 'Dive', 'Straight', '1.8', 4, 401, 'a');
	const i401b = new Dive('Inward', 'Dive', 'Pike', '1.5', 4, 401, 'b');
	const i401c = new Dive('Inward', 'Dive', 'Tuck', '1.4', 4, 401, 'c');
	const i402a = new Dive('Inward', '1 SS', 'Straight', '2.0', 4, 402, 'a');
	const i402b = new Dive('Inward', '1 SS', 'Pike', '1.7', 4, 402, 'b');
	const i402c = new Dive('Inward', '1 SS', 'Tuck', '1.6', 4, 402, 'c');
	const i403b = new Dive('Inward', '1.5 SS', 'Pike', '2.4', 4, 403, 'b');
	const i403c = new Dive('Inward', '1.5 SS', 'Tuck', '2.2', 4, 403, 'c');
	const i404b = new Dive('Inward', '2 SS', 'Pike', '3.0', 4, 404, 'b');
	const i404c = new Dive('Inward', '2 SS', 'Tuck', '2.8', 4, 404, 'c');
	const i405b = new Dive('Inward', '2.5 SS', 'Pike', '3.4', 4, 405, 'b');
	const i405c = new Dive('Inward', '2.5 SS', 'Tuck', '3.1', 4, 405, 'c');
	//Flying
	const i412b = new Dive('Inward Flying', '1 SS', 'Pike', '2.1', 4, 412, 'b');
	const i412c = new Dive('Inward Flying', '1 SS', 'Tuck', '2.0', 4, 412, 'c');
	const i413b = new Dive('Inward Flying', '1.5 SS', 'Pike', '2.9', 4, 413, 'b');
	const i413c = new Dive('Inward Flying', '1.5 SS', 'Tuck', '2.7', 4, 413, 'c');

	//Twister
	//T-Forward
	const t5111a = new Dive(
		'Forward',
		'Dive, 1/2 Twist',
		'Straight',
		'1.8',
		5,
		5111,
		'a'
	);
	const t5111b = new Dive(
		'Forward',
		'Dive, 1/2 Twist',
		'Pike',
		'1.7',
		5,
		5111,
		'b'
	);
	const t5111c = new Dive(
		'Forward',
		'Dive, 1/2 Twist',
		'Tuck',
		'1.6',
		5,
		5111,
		'c'
	);
	const t5112a = new Dive(
		'Forward',
		'Dive, 1 Twist',
		'Straight',
		'2.0',
		5,
		5112,
		'a'
	);
	const t5112b = new Dive(
		'Forward',
		'Dive, 1 Twist',
		'Pike',
		'1.9',
		5,
		5112,
		'b'
	);
	const t5121d = new Dive(
		'Forward',
		'1 SS, 1/2 Twist',
		'Free',
		'1.7',
		5,
		5121,
		'd'
	);
	const t5122d = new Dive(
		'Forward',
		'1 SS, 1 Twist',
		'Free',
		'1.9',
		5,
		5122,
		'd'
	);
	const t5124d = new Dive(
		'Forward',
		'1 SS, 2 Twists',
		'Free',
		'2.3',
		5,
		5124,
		'd'
	);
	const t5126d = new Dive(
		'Forward',
		'1 SS, 3 Twists',
		'Free',
		'2.8',
		5,
		5126,
		'd'
	);
	const t5131d = new Dive(
		'Forward',
		'1.5 SS, 1/2 Twist',
		'Free',
		'2.0',
		5,
		5131,
		'd'
	);
	const t5132d = new Dive(
		'Forward',
		'1.5 SS, 1 Twist',
		'Free',
		'2.2',
		5,
		5132,
		'd'
	);
	const t5134d = new Dive(
		'Forward',
		'1.5 SS, 2 Twists',
		'Free',
		'2.6',
		5,
		5134,
		'd'
	);
	const t5136d = new Dive(
		'Forward',
		'1.5 SS, 3 Twist',
		'Free',
		'3.1',
		5,
		5136,
		'd'
	);
	const t5142b = new Dive(
		'Forward',
		'2 SS, 1 Twist',
		'Pike',
		'2.7',
		5,
		5142,
		'b'
	);
	const t5142c = new Dive(
		'Forward',
		'2 SS, 1 Twist',
		'Tuck',
		'2.6',
		5,
		5142,
		'c'
	);
	const t5152b = new Dive(
		'Forward',
		'2.5 SS, 1 Twist',
		'Pike',
		'3.2',
		5,
		5152,
		'b'
	);
	const t5152c = new Dive(
		'Forward',
		'2.5 SS, 1 Twist',
		'Tuck',
		'3.0',
		5,
		5152,
		'c'
	);
	//T-Back
	const t5211a = new Dive(
		'Back',
		'Dive, 1/2 Twist',
		'Straight',
		'1.8',
		5,
		5211,
		'a'
	);
	const t5212a = new Dive(
		'Back',
		'Dive, 1 Twist',
		'Straight',
		'2.0',
		5,
		5212,
		'a'
	);
	const t5221d = new Dive(
		'Back',
		'1 SS, 1/2 Twist',
		'Free',
		'1.7',
		5,
		5221,
		'd'
	);
	const t5222d = new Dive('Back', '1 SS, 1 Twist', 'Free', '1.9', 5, 5222, 'd');
	const t5223d = new Dive(
		'Back',
		'1 SS, 1.5 Twist',
		'Free',
		'2.3',
		5,
		5223,
		'd'
	);
	const t5225d = new Dive(
		'Back',
		'1 SS, 2.5 Twist',
		'Free',
		'2.7',
		5,
		5225,
		'd'
	);
	const t5227d = new Dive(
		'Back',
		'1 SS, 3.5 Twist',
		'Free',
		'3.2',
		5,
		5227,
		'd'
	);
	const t5231d = new Dive(
		'Back',
		'1.5 SS, 1/2 Twist',
		'Free',
		'2.1',
		5,
		5231,
		'd'
	);
	const t5233d = new Dive(
		'Back',
		'1.5 SS, 1.5 Twist',
		'Free',
		'2.5',
		5,
		5233,
		'd'
	);
	const t5235d = new Dive(
		'Back',
		'1.5 SS, 2.5 Twist',
		'Free',
		'2.9',
		5,
		5235,
		'd'
	);
	const t5251b = new Dive(
		'Back',
		'2.5 SS, 1/2 Twist',
		'Pike',
		'2.9',
		5,
		5251,
		'b'
	);
	const t5251c = new Dive(
		'Back',
		'2.5 SS, 1/2 Twist',
		'Tuck',
		'2.7',
		5,
		5251,
		'c'
	);
	//T-Reverse
	const t5311a = new Dive(
		'Reverse',
		'Dive, 1/2 Twist',
		'Straight',
		'1.9',
		5,
		5311,
		'a'
	);
	const t5312a = new Dive(
		'Reverse',
		'Dive, 1 Twist',
		'Straight',
		'2.1',
		5,
		5312,
		'a'
	);
	const t5321d = new Dive(
		'Reverse',
		'1 SS, 1/2 Twist',
		'Free',
		'1.8',
		5,
		5321,
		'd'
	);
	const t5322d = new Dive(
		'Reverse',
		'1 SS, 1 Twist',
		'Free',
		'2.0',
		5,
		5322,
		'd'
	);
	const t5323d = new Dive(
		'Reverse',
		'1 SS, 1.5 Twist',
		'Free',
		'2.4',
		5,
		5323,
		'd'
	);
	const t5325d = new Dive(
		'Reverse',
		'1 SS, 2.5 Twist',
		'Free',
		'2.8',
		5,
		5325,
		'd'
	);
	const t5331d = new Dive(
		'Reverse',
		'1.5 SS, 1/2 Twist',
		'Free',
		'2.2',
		5,
		5331,
		'd'
	);
	const t5333d = new Dive(
		'Reverse',
		'1.5 SS, 1.5 Twist',
		'Free',
		'2.6',
		5,
		5333,
		'd'
	);
	const t5335d = new Dive(
		'Reverse',
		'1.5 SS, 2.5 Twist',
		'Free',
		'3.0',
		5,
		5335,
		'd'
	);
	const t5351b = new Dive(
		'Reverse',
		'2.5 SS, 1/2 Twist',
		'Pike',
		'2.9',
		5,
		5351,
		'b'
	);
	const t5351c = new Dive(
		'Reverse',
		'2.5 SS, 1/2 Twist',
		'Tuck',
		'2.7',
		5,
		5351,
		'c'
	);
	//T-Inward
	const t5411a = new Dive(
		'Inward',
		'Dive, 1/2 Twist',
		'Straight',
		'2.0',
		5,
		5411,
		'a'
	);
	const t5411b = new Dive(
		'Inward',
		'Dive, 1/2 Twist',
		'Pike',
		'1.7',
		5,
		5411,
		'b'
	);
	const t5412a = new Dive(
		'Inward',
		'Dive, 1 Twist',
		'Straight',
		'2.2',
		5,
		5412,
		'a'
	);
	const t5412b = new Dive(
		'Inward',
		'Dive, 1 Twist',
		'Pike',
		'1.9',
		5,
		5412,
		'b'
	);
	const t5421d = new Dive(
		'Inward',
		'1 SS, 1/2 Twist',
		'Free',
		'1.9',
		5,
		5421,
		'd'
	);
	const t5422d = new Dive(
		'Inward',
		'1 SS, 1 Twist',
		'Free',
		'2.1',
		5,
		5422,
		'd'
	);
	const t5432d = new Dive(
		'Inward',
		'1.5 SS, 1 Twist',
		'Free',
		'2.7',
		5,
		5432,
		'd'
	);
	const t5434d = new Dive(
		'Inward',
		'1.5 SS, 2 Twist',
		'Free',
		'3.1',
		5,
		5434,
		'd'
	);

	//Empty Dive
	const empty = new Dive(' ', ' ', ' ', ' ', ' ', ' ');

	//array
	return [
		f101a,
		f101b,
		f101c,
		f102a,
		f102b,
		f102c,
		f103a,
		f103b,
		f103c,
		f104a,
		f104b,
		f104c,
		f105b,
		f105c,
		f106b,
		f106c,
		f107b,
		f107c,
		f112b,
		f112c,
		f113b,
		f113c,
		b201a,
		b201b,
		b201c,
		b202a,
		b202b,
		b202c,
		b203a,
		b203b,
		b203c,
		b204b,
		b204c,
		b205b,
		b205c,
		r301a,
		r301b,
		r301c,
		r302a,
		r302b,
		r302c,
		r303a,
		r303b,
		r303c,
		r304a,
		r304b,
		r304c,
		r305b,
		r305c,
		i401a,
		i401b,
		i401c,
		i402a,
		i402b,
		i402c,
		i403b,
		i403c,
		i404b,
		i404c,
		i405b,
		i405c,
		i412b,
		i412c,
		i413b,
		i413c,
		t5111a,
		t5111b,
		t5111c,
		t5112a,
		t5112b,
		t5121d,
		t5122d,
		t5124d,
		t5126d,
		t5131d,
		t5132d,
		t5134d,
		t5136d,
		t5142b,
		t5142c,
		t5152b,
		t5152c,
		t5211a,
		t5212a,
		t5221d,
		t5222d,
		t5223d,
		t5225d,
		t5227d,
		t5231d,
		t5233d,
		t5235d,
		t5251b,
		t5251c,
		t5311a,
		t5312a,
		t5321d,
		t5322d,
		t5323d,
		t5325d,
		t5331d,
		t5333d,
		t5335d,
		t5351b,
		t5351c,
		t5411a,
		t5411b,
		t5412a,
		t5412b,
		t5421d,
		t5422d,
		t5432d,
		t5434d,
		empty,
	];
}
