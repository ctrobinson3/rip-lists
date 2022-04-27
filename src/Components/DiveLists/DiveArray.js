export function diveArrayFunction() {
	//dive class
	class Dive {
		constructor(direction, rotation, position, difficulty, cat, num) {
			this.direction = direction;
			this.rotation = rotation;
			this.position = position;
			this.difficulty = difficulty;
			this.cat = cat;
			this.num = num;
		}
	}

	//forward
	const f101a = new Dive('Forward', 'Dive', 'Straight', '1.4', 1, 101);
	const f101b = new Dive('Forward', 'Dive', 'Pike', '1.3', 1, 101);
	const f101c = new Dive('Forward', 'Dive', 'Tuck', '1.2', 1, 101);
	const f102a = new Dive('Forward', '1 SS', 'Straight', '1.6', 1, 102);
	const f102b = new Dive('Forward', '1 SS', 'Pike', '1.5', 1, 102);
	const f102c = new Dive('Forward', '1 SS', 'Tuck', '1.4', 1, 102);
	const f103a = new Dive('Forward', '1.5 SS', 'Straight', '2.0', 1, 103);
	const f103b = new Dive('Forward', '1.5 SS', 'Pike', '1.7', 1, 103);
	const f103c = new Dive('Forward', '1.5 SS', 'Tuck', '1.6', 1, 103);
	const f104a = new Dive('Forward', '2 SS', 'Straight', '2.6', 1, 104);
	const f104b = new Dive('Forward', '2 SS', 'Pike', '2.3', 1, 104);
	const f104c = new Dive('Forward', '2 SS', 'Tuck', '2.2', 1, 104);
	const f105b = new Dive('Forward', '2.5 SS', 'Pike', '2.6', 1, 105);
	const f105c = new Dive('Forward', '2.5 SS', 'Tuck', '2.4', 1, 105);
	const f106b = new Dive('Forward', '3 SS', 'Pike', '3.2', 1, 106);
	const f106c = new Dive('Forward', '3 SS', 'Tuck', '2.9', 1, 106);
	const f107b = new Dive('Forward', '3.5 SS', 'Pike', '3.3', 1, 107);
	const f107c = new Dive('Forward', '3.5 SS', 'Tuck', '3.0', 1, 107);
	//flying
	const f112b = new Dive('Forward Flying', '1 SS', 'Pike', '1.7', 1, 112);
	const f112c = new Dive('Forward Flying', '1 SS', 'Tuck', '1.6', 1, 112);
	const f113b = new Dive('Forward Flying', '1.5 SS', 'Pike', '1.9', 1, 113);
	const f113c = new Dive('Forward Flying', '1.5 SS', 'Tuck', '1.8', 1, 113);

	//back
	const b201a = new Dive('Back', 'Dive', 'Straight', '1.7', 2, 201);
	const b201b = new Dive('Back', 'Dive', 'Pike', '1.6', 2, 201);
	const b201c = new Dive('Back', 'Dive', 'Tuck', '1.5', 2, 201);
	const b202a = new Dive('Back', '1 SS', 'Straight', '1.7', 2, 202);
	const b202b = new Dive('Back', '1 SS', 'Pike', '1.6', 2, 202);
	const b202c = new Dive('Back', '1 SS', 'Tuck', '1.5', 2, 202);
	const b203a = new Dive('Back', '1.5 SS', 'Straight', '2.5', 2, 203);
	const b203b = new Dive('Back', '1.5 SS', 'Pike', '2.3', 2, 203);
	const b203c = new Dive('Back', '1.5 SS', 'Tuck', '2.0', 2, 203);
	const b204b = new Dive('Back', '2 SS', 'Pike', '2.3', 2, 204);
	const b204c = new Dive('Back', '2 SS', 'Tuck', '2.0', 2, 204);
	const b205b = new Dive('Back', '2.5 SS', 'Pike', '3.2', 2, 205);
	const b205c = new Dive('Back', '2.5 SS', 'Tuck', '3.0', 2, 205);

	//reverse
	const r301a = new Dive('Reverse', 'Dive', 'Straight', '1.8', 3, 301);
	const r301b = new Dive('Reverse', 'Dive', 'Pike', '1.7', 3, 301);
	const r301c = new Dive('Reverse', 'Dive', 'Tuck', '1.6', 3, 301);
	const r302a = new Dive('Reverse', '1 SS', 'Straight', '1.8', 3, 302);
	const r302b = new Dive('Reverse', '1 SS', 'Pike', '1.7', 3, 302);
	const r302c = new Dive('Reverse', '1 SS', 'Tuck', '1.6', 3, 302);
	const r303a = new Dive('Reverse', '1.5 SS', 'Straight', '2.7', 3, 303);
	const r303b = new Dive('Reverse', '1.5 SS', 'Pike', '2.4', 3, 303);
	const r303c = new Dive('Reverse', '1.5 SS', 'Tuck', '2.1', 3, 303);
	const r304a = new Dive('Reverse', '2 SS', 'Straight', '2.9', 3, 304);
	const r304b = new Dive('Reverse', '2 SS', 'Pike', '2.4', 3, 304);
	const r304c = new Dive('Reverse', '2 SS', 'Tuck', '2.1', 3, 304);
	const r305b = new Dive('Reverse', '2.5 SS', 'Pike', '3.2', 3, 305);
	const r305c = new Dive('Reverse', '2.5 SS', 'Tuck', '3.0', 3, 305);

	//Inward
	const i401a = new Dive('Inward', 'Dive', 'Straight', '1.8', 4, 401);
	const i401b = new Dive('Inward', 'Dive', 'Pike', '1.5', 4, 401);
	const i401c = new Dive('Inward', 'Dive', 'Tuck', '1.4', 4, 401);
	const i402a = new Dive('Inward', '1 SS', 'Straight', '2.0', 4, 402);
	const i402b = new Dive('Inward', '1 SS', 'Pike', '1.7', 4, 402);
	const i402c = new Dive('Inward', '1 SS', 'Tuck', '1.6', 4, 402);
	const i403b = new Dive('Inward', '1.5 SS', 'Pike', '2.4', 4, 403);
	const i403c = new Dive('Inward', '1.5 SS', 'Tuck', '2.2', 4, 403);
	const i404b = new Dive('Inward', '2 SS', 'Pike', '3.0', 4, 404);
	const i404c = new Dive('Inward', '2 SS', 'Tuck', '2.8', 4, 404);
	const i405b = new Dive('Inward', '2.5 SS', 'Pike', '3.4', 4, 405);
	const i405c = new Dive('Inward', '2.5 SS', 'Tuck', '3.1', 4, 405);
	//Flying
	const i412b = new Dive('Inward Flying', '1 SS', 'Pike', '2.1', 4, 412);
	const i412c = new Dive('Inward Flying', '1 SS', 'Tuck', '2.0', 4, 412);
	const i413b = new Dive('Inward Flying', '1.5 SS', 'Pike', '2.9', 4, 413);
	const i413c = new Dive('Inward Flying', '1.5 SS', 'Tuck', '2.7', 4, 413);

	//Twister
	//T-Forward
	const t5111a = new Dive(
		'Forward',
		'Dive, 1/2 Twist',
		'Straight',
		'1.8',
		5,
		5111
	);
	const t5111b = new Dive('Forward', 'Dive, 1/2 Twist', 'Pike', '1.7', 5, 5111);
	const t5111c = new Dive('Forward', 'Dive, 1/2 Twist', 'Tuck', '1.6', 5, 5111);
	const t5112a = new Dive(
		'Forward',
		'Dive, 1 Twist',
		'Straight',
		'2.0',
		5,
		5112
	);
	const t5112b = new Dive('Forward', 'Dive, 1 Twist', 'Pike', '1.9', 5, 5112);
	const t5121d = new Dive('Forward', '1 SS, 1/2 Twist', 'Free', '1.7', 5, 5121);
	const t5122d = new Dive('Forward', '1 SS, 1 Twist', 'Free', '1.9', 5, 5122);
	const t5124d = new Dive('Forward', '1 SS, 2 Twists', 'Free', '2.3', 5, 5124);
	const t5126d = new Dive('Forward', '1 SS, 3 Twists', 'Free', '2.8', 5, 5126);
	const t5131d = new Dive(
		'Forward',
		'1.5 SS, 1/2 Twist',
		'Free',
		'2.0',
		5,
		5131
	);
	const t5132d = new Dive('Forward', '1.5 SS, 1 Twist', 'Free', '2.2', 5, 5132);
	const t5134d = new Dive(
		'Forward',
		'1.5 SS, 2 Twists',
		'Free',
		'2.6',
		5,
		5134
	);
	const t5136d = new Dive('Forward', '1.5 SS, 3 Twist', 'Free', '3.1', 5, 5136);
	const t5142b = new Dive('Forward', '2 SS, 1 Twist', 'Pike', '2.7', 5, 5142);
	const t5142c = new Dive('Forward', '2 SS, 1 Twist', 'Tuck', '2.6', 5, 5142);
	const t5152b = new Dive('Forward', '2.5 SS, 1 Twist', 'Pike', '3.2', 5, 5152);
	const t5152c = new Dive('Forward', '2.5 SS, 1 Twist', 'Tuck', '3.0', 5, 5152);
	//T-Back
	const t5211a = new Dive(
		'Back',
		'Dive, 1/2 Twist',
		'Straight',
		'1.8',
		5,
		5211
	);
	const t5212a = new Dive('Back', 'Dive, 1 Twist', 'Straight', '2.0', 5, 5212);
	const t5221d = new Dive('Back', '1 SS, 1/2 Twist', 'Free', '1.7', 5, 5221);
	const t5222d = new Dive('Back', '1 SS, 1 Twist', 'Free', '1.9', 5, 5222);
	const t5223d = new Dive('Back', '1 SS, 1.5 Twist', 'Free', '2.3', 5, 5223);
	const t5225d = new Dive('Back', '1 SS, 2.5 Twist', 'Free', '2.7', 5, 5225);
	const t5227d = new Dive('Back', '1 SS, 3.5 Twist', 'Free', '3.2', 5, 5227);
	const t5231d = new Dive('Back', '1.5 SS, 1/2 Twist', 'Free', '2.1', 5, 5231);
	const t5233d = new Dive('Back', '1.5 SS, 1.5 Twist', 'Free', '2.5', 5, 5233);
	const t5235d = new Dive('Back', '1.5 SS, 2.5 Twist', 'Free', '2.9', 5, 5235);
	const t5251b = new Dive('Back', '2.5 SS, 1/2 Twist', 'Pike', '2.9', 5, 5251);
	const t5251c = new Dive('Back', '2.5 SS, 1/2 Twist', 'Tuck', '2.7', 5, 5251);
	//T-Reverse
	const t5311a = new Dive(
		'Reverse',
		'Dive, 1/2 Twist',
		'Straight',
		'1.9',
		5,
		5311
	);
	const t5312a = new Dive(
		'Reverse',
		'Dive, 1 Twist',
		'Straight',
		'2.1',
		5,
		5312
	);
	const t5321d = new Dive('Reverse', '1 SS, 1/2 Twist', 'Free', '1.8', 5, 5321);
	const t5322d = new Dive('Reverse', '1 SS, 1 Twist', 'Free', '2.0', 5, 5322);
	const t5323d = new Dive('Reverse', '1 SS, 1.5 Twist', 'Free', '2.4', 5, 5323);
	const t5325d = new Dive('Reverse', '1 SS, 2.5 Twist', 'Free', '2.8', 5, 5325);
	const t5331d = new Dive(
		'Reverse',
		'1.5 SS, 1/2 Twist',
		'Free',
		'2.2',
		5,
		5331
	);
	const t5333d = new Dive(
		'Reverse',
		'1.5 SS, 1.5 Twist',
		'Free',
		'2.6',
		5,
		5333
	);
	const t5335d = new Dive(
		'Reverse',
		'1.5 SS, 2.5 Twist',
		'Free',
		'3.0',
		5,
		5335
	);
	const t5351b = new Dive(
		'Reverse',
		'2.5 SS, 1/2 Twist',
		'Pike',
		'2.9',
		5,
		5351
	);
	const t5351c = new Dive(
		'Reverse',
		'2.5 SS, 1/2 Twist',
		'Tuck',
		'2.7',
		5,
		5351
	);
	//T-Inward
	const t5411a = new Dive(
		'Inward',
		'Dive, 1/2 Twist',
		'Straight',
		'2.0',
		5,
		5411
	);
	const t5411b = new Dive('Inward', 'Dive, 1/2 Twist', 'Pike', '1.7', 5, 5411);
	const t5412a = new Dive(
		'Inward',
		'Dive, 1 Twist',
		'Straight',
		'2.2',
		5,
		5412
	);
	const t5412b = new Dive('Inward', 'Dive, 1 Twist', 'Pike', '1.9', 5, 5412);
	const t5421d = new Dive('Inward', '1 SS, 1/2 Twist', 'Free', '1.9', 5, 5421);
	const t5422d = new Dive('Inward', '1 SS, 1 Twist', 'Free', '2.1', 5, 5422);
	const t5432d = new Dive('Inward', '1.5 SS, 1 Twist', 'Free', '2.7', 5, 5432);
	const t5434d = new Dive('Inward', '1.5 SS, 2 Twist', 'Free', '3.1', 5, 5434);

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
