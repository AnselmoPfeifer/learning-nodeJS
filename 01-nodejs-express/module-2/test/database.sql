create table livros (
	id bigint primary key auto_increment,
	titulo varchar(100),
	autor varchar(50),
	data_producao date
) engine=InnoDB;

insert into livros (titulo, autor, data_producao) values('Livro de NodeJS','Anselmo Pfeifer','2017-01-15');