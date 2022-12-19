import React from "react";

export default function WorkerPostForm() {
	return (
		<div>
			<h1>Ishchi e'lonini to'ldirish</h1>
			<div>
				<div>
					<div>
						<label htmlFor="">Ism</label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor="">Bolim</label>
						<select name="" id="">
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
							<option value="">Qurilish</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Kategoriya</label>
						<select name="" id="">
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
							<option value="">Suvoq</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Kategoriya turi</label>
						<select name="" id="">
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
							<option value="">Qum suvoq</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Material turi (ixtiyoriy)</label>
						<select name="" id="">
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
							<option value="">Kliniz</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Qilinadigan ish rasmi (ixtiyoriy)</label>
						<input type="file" />
					</div>
					<div>
						<label htmlFor="">Qo'shimcha ma'lumot (ixtiyoriy)</label>
						<textarea type="text" />
					</div>
				</div>

				<div>
					<h1>Ishni qachon boshlash kerak?</h1>
					<div>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="">Bugun</label>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="">Ertaga</label>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="">Ustaning vaqtiga qarab</label>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="">Hafta ichida</label>
					</div>
					<div>
						<label htmlFor="">Usta qaysi vaqtda kelgan ma'qul?</label>
						<select name="" id="">
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
							<option value="">9:00 dan 10:00 gacha</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Xizmat uchun qancha to'lamoqchisiz?</label>
						<input type="number" />
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="">Manzil</label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor="">Mo'ljal (ixtiyoriy)</label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor="">Telefon raqam</label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor="">Qo'shimcha talablar (ixtiyoriy)</label>
						<textarea type="text" />
					</div>
				</div>
			</div>
		</div>
	);
}
