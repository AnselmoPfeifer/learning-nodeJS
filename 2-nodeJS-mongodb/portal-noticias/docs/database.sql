create table noticias(
	id_noticia bigint primary key auto_increment,
	titulo varchar(100),
	noticia text,
	data_criacao timestamp default current_timestamp
	);

insert into noticias (titulo, noticia) values ('Titulo da primeira noticia','Texto da primeira noticia');