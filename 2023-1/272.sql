USE [master]
GO
/****** Object:  Database [db1]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE DATABASE [db1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'db1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\db1.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'db1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\db1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [db1] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [db1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [db1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [db1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [db1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [db1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [db1] SET ARITHABORT OFF 
GO
ALTER DATABASE [db1] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [db1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [db1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [db1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [db1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [db1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [db1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [db1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [db1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [db1] SET  ENABLE_BROKER 
GO
ALTER DATABASE [db1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [db1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [db1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [db1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [db1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [db1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [db1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [db1] SET RECOVERY FULL 
GO
ALTER DATABASE [db1] SET  MULTI_USER 
GO
ALTER DATABASE [db1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [db1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [db1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [db1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [db1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [db1] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'db1', N'ON'
GO
ALTER DATABASE [db1] SET QUERY_STORE = ON
GO
ALTER DATABASE [db1] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [db1]
GO
/****** Object:  User [Miguel]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE USER [Miguel] FOR LOGIN [Miguel] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [juan]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE USER [juan] FOR LOGIN [Juan] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [Ana]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE USER [Ana] FOR LOGIN [Ana] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  DatabaseRole [ventas]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE ROLE [ventas]
GO
/****** Object:  DatabaseRole [sporte]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE ROLE [sporte]
GO
/****** Object:  DatabaseRole [soporte]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE ROLE [soporte]
GO
/****** Object:  DatabaseRole [gerencia]    Script Date: 5/18/2023 8:12:48 PM ******/
CREATE ROLE [gerencia]
GO
/****** Object:  UserDefinedFunction [dbo].[f_prom]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[f_prom]
(@val1  float,
@val2  float)
	returns  float
	as 
	BEGIN 
		DECLARE 
		@resultado float
		SET @resultado  =(@val1+@val2)/2
		return @resultado 
	end;
GO
/****** Object:  UserDefinedFunction [dbo].[f_promedio]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[f_promedio]
 (@valor1 decimal(4,2),
  @valor2 decimal(4,2)
 )
 returns decimal (6,2)
 as
 begin 
   declare @resultado decimal(6,2)
   set @resultado=(@valor1+@valor2)/2
   return @resultado
 end;
GO
/****** Object:  UserDefinedFunction [dbo].[pee]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[pee]
	(@val decimal(4,2))
	returns int 
	as 
	begin 
	   declare @pers int

		select @pers=p.nit
					from persona p, Detalle_Servicio  ds, solicitud sol
					where ds.precio = @val
					and sol.codSer= ds.codSer
					and sol.nit=p.nit
		return @pers
	end
GO
/****** Object:  UserDefinedFunction [dbo].[peer]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[peer]
	(@val decimal(4,2))
	returns int 
	as 
	begin 
	   declare @pers int

		select @pers=p.nit
					from persona p, Detalle_Servicio  ds, solicitud sol
					where ds.precio = @val
					and sol.codSer= ds.codSer
					and sol.nit=p.nit
		return @pers
	end
GO
/****** Object:  Table [dbo].[solicitud]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solicitud](
	[nit] [int] NULL,
	[codSer] [varchar](50) NULL,
	[direccion] [varchar](50) NULL,
	[fecha] [int] NULL,
	[codSup] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detalle_Servicio]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalle_Servicio](
	[codSer] [varchar](5) NULL,
	[nro] [int] NULL,
	[precio] [decimal](4, 2) NULL,
	[codAmb] [varchar](5) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[nit] [int] NULL,
	[direccion] [varchar](50) NULL,
	[correoE] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[Lis]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Lis]
as 
	select p.nit
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 13.00
	and sol.codSer= ds.codSer
	and sol.nit=p.nit
GO
/****** Object:  View [dbo].[List]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[List]
as 
	select p.nit
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 11.00
GO
/****** Object:  View [dbo].[Liss]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Liss]
as 
	select p.nit
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 12.00
	and sol.codSer= ds.codSer
	and sol.nit=p.nit
GO
/****** Object:  View [dbo].[m]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

	create view [dbo].[m]
		as
			select nit
				from persona
GO
/****** Object:  View [dbo].[mm]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

	create view [dbo].[mm]
		as
			select p.nit
				from persona p
GO
/****** Object:  View [dbo].[mmm]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

	create view [dbo].[mmm]
		as
			select p.nit
				from persona p
					where p.direccion='c. siempre viva'
GO
/****** Object:  View [dbo].[Lisst]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Lisst]
as 
	select ds.precio
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 12.00
	and sol.codSer= ds.codSer
	and sol.nit=p.nit
GO
/****** Object:  View [dbo].[Lisstt]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[Lisstt]
as 
	select sol.nit
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 12.00
	and sol.codSer= ds.codSer
	and sol.nit=p.nit
GO
/****** Object:  View [dbo].[sss]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[sss]
	as
	select * from  Detalle_Servicio
GO
/****** Object:  View [dbo].[LissttR]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[LissttR]
as 
	select sol.nit
	from persona p, Detalle_Servicio  ds, solicitud sol
	where ds.precio = 11.00
	and sol.codSer= ds.codSer
	and sol.nit=p.nit
GO
/****** Object:  View [dbo].[pro]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[pro]
as 
	select * from  Detalle_Servicio
GO
/****** Object:  View [dbo].[prox]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[prox]
as 
	select * from  Detalle_Servicio
GO
/****** Object:  Table [dbo].[Ambiente]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ambiente](
	[codAmb] [varchar](5) NULL,
	[superficie] [int] NULL,
	[descr] [varchar](300) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Atencion]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Atencion](
	[nit] [int] NULL,
	[codSer] [varchar](50) NULL,
	[codPrs] [varchar](50) NULL,
	[fechan] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BienInmueble]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BienInmueble](
	[nroFR] [varchar](15) NULL,
	[superficie] [real] NULL,
	[ubicación] [varchar](50) NULL,
	[codPrs] [varchar](5) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cargo]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cargo](
	[codcarg] [varchar](50) NULL,
	[nombre] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pago]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pago](
	[nit] [int] NULL,
	[codSer] [varchar](50) NULL,
	[fecha] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonaJur]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonaJur](
	[nit] [int] NULL,
	[razonSocial] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personal]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personal](
	[codPrs] [varchar](50) NULL,
	[codcarg] [varchar](50) NULL,
	[nombre] [varchar](50) NULL,
	[paterno] [varchar](50) NULL,
	[materno] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonaNat]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonaNat](
	[nit] [int] NULL,
	[nombre] [varchar](50) NULL,
	[paterno] [varchar](50) NULL,
	[materno] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Servicio]    Script Date: 5/18/2023 8:12:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicio](
	[codSer] [varchar](50) NULL,
	[nombre] [varchar](50) NULL,
	[precio] [float] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am2', 16, N'limpieza de automovil en el patio de una casa')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am3', 50, N'limpieza de cocina de una dimensionn 50 metros')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am5', 5, N'limpieza de una bicicleta de montaña')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am7', 80, N'limpieza de una habitacion de 80 metros cuadrados')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am1', 80, N'garage de la casa')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am4', 60, N'limpieza de una pequeña residencia')
INSERT [dbo].[Ambiente] ([codAmb], [superficie], [descr]) VALUES (N'am6	', 100, N'limpieza de patio ubicado cerca a un pantanal')
GO
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1114, N'serv4', N'cp1', 13)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1116, N'serv6', N'cp2', 13)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1111, N'serv1', N'cp1', 11)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1113, N'serv3', N'cp3', 16)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1115, N'serv5', N'cp3', 3)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1117, N'serv7', N'cp1', 29)
INSERT [dbo].[Atencion] ([nit], [codSer], [codPrs], [fechan]) VALUES (1112, N'serv2', N'cp2', 13)
GO
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien1', 80, N'c. siempre viva', N'cp1')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien6', 100, N'c. el pantanal', N'cp2')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien5', 5, N'z. los parrales', N'cp3')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien2', 16, N'c. los rosales', N'cp2')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien4', 60, N'c. la pampa', N'cp1')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien7', 80, N'z. muy muy lejano', N'cp1')
INSERT [dbo].[BienInmueble] ([nroFR], [superficie], [ubicación], [codPrs]) VALUES (N'bien3', 50, N'z. pedregal', N'cp3')
GO
INSERT [dbo].[Cargo] ([codcarg], [nombre]) VALUES (N'car1', N'director')
INSERT [dbo].[Cargo] ([codcarg], [nombre]) VALUES (N'car2', N'supervisor')
INSERT [dbo].[Cargo] ([codcarg], [nombre]) VALUES (N'car3', N'limpieza')
GO
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv2', 2, CAST(11.00 AS Decimal(4, 2)), N'am2')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv6', 6, CAST(99.00 AS Decimal(4, 2)), N'am6')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv4', 4, CAST(99.00 AS Decimal(4, 2)), N'am4')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv7', 7, CAST(60.00 AS Decimal(4, 2)), N'am7')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv3', 3, CAST(50.00 AS Decimal(4, 2)), N'am3')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv1', 1, CAST(10.00 AS Decimal(4, 2)), N'am1')
INSERT [dbo].[Detalle_Servicio] ([codSer], [nro], [precio], [codAmb]) VALUES (N'serv5', 5, CAST(10.00 AS Decimal(4, 2)), N'am5')
GO
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1111, N'serv1', N'11/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1115, N'serv5', N'03/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1112, N'serv2', N'13/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1113, N'serv3', N'16/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1114, N'serv4', N'13/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1116, N'serv6', N'13/04/23')
INSERT [dbo].[Pago] ([nit], [codSer], [fecha]) VALUES (1117, N'serv7', N'23/04/23')
GO
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1111, N'c. siempre viva', N'per1111')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1112, N'c. los rosales', N'per1112')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1113, N'z. pedregal', N'per1113')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1114, N'c. la pampa', N'per1114')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1115, N'z. los parrales', N'per1115')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1116, N'c. el pantanal', N'per1116')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (1117, N'z. muy muy lejano', N'per1117')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (2111, N'los lamentos', N'per2111')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (2112, N'fondo de bikini', N'per2112')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (2113, N'z. pedregal', N'per2113')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (2114, N'vecindad chavo', N'per2114')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (2115, N'c. siempre viva', N'per2115')
INSERT [dbo].[persona] ([nit], [direccion], [correoE]) VALUES (123, N'ccc', N'dd@d')
GO
INSERT [dbo].[PersonaJur] ([nit], [razonSocial]) VALUES (1116, N'administrativo')
INSERT [dbo].[PersonaJur] ([nit], [razonSocial]) VALUES (1117, N'abogada')
GO
INSERT [dbo].[Personal] ([codPrs], [codcarg], [nombre], [paterno], [materno]) VALUES (N'cp3', N'car3', N'ariel', N'del', N'mar')
INSERT [dbo].[Personal] ([codPrs], [codcarg], [nombre], [paterno], [materno]) VALUES (N'cp1', N'car1', N'salome', N'verde', N'cespedes')
INSERT [dbo].[Personal] ([codPrs], [codcarg], [nombre], [paterno], [materno]) VALUES (N'cp2', N'car2', N'bruno', N'madrigal', N'magia')
GO
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (1111, N'soledad', N'salas', N'carro')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (1112, N'patricio', N'estrella', N'del mar')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (1113, N'pedro', N'picapiedra', N'pedregal')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (1114, N'chavo', N'del', N'ocho')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (1115, N'homero', N'simpson', N'bubie')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (2111, N'lucia', N'chacon', N'mamani')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (2112, N'calamardo', N'pulpo', N'clarin')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (2113, N'pablo', N'marmol', N'arce')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (2114, N'chilindrina', N'lopez', N'valdez')
INSERT [dbo].[PersonaNat] ([nit], [nombre], [paterno], [materno]) VALUES (2115, N'marge', N'bubie', N'casas')
GO
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv1', N'garage', 10)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv2', N'auto', 15)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv3', N'cocina', 50)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv4', N'casa', 99)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv5', N'biclicleta', 10)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv6', N'pantano', 99)
INSERT [dbo].[Servicio] ([codSer], [nombre], [precio]) VALUES (N'serv7', N'cuarto', 60)
GO
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1111, N'serv1', N'c. siempre viva', 10, N'cp1')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1112, N'serv2', N'c. los rosales', 12, N'cp2')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1113, N'serv3', N'z. pedregal', 15, N'cp3')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1114, N'serv4', N'c. la pampa', 12, N'cp1')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1115, N'serv5', N'z. los parrales', 2, N'cp3')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1116, N'serv6', N'c. el pantanal', 3, N'cp2')
INSERT [dbo].[solicitud] ([nit], [codSer], [direccion], [fecha], [codSup]) VALUES (1117, N'serv7', N'z. muy muy lejano', 28, N'cp1')
GO
/****** Object:  StoredProcedure [dbo].[AumentoAAA]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[AumentoAAA]
(@np float,
@ncS varchar(50))
as 
update Detalle_Servicio set precio=precio+@np
where codSer=@ncS
GO
/****** Object:  StoredProcedure [dbo].[descuento]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[descuento]
(@np float,
@ncS varchar(50))
as 
update Detalle_Servicio set precio=precio-@np
where codSer=@ncS
GO
/****** Object:  StoredProcedure [dbo].[descuentoA]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[descuentoA]
(@np float,
@ncS varchar(50))
as 
update Detalle_Servicio set precio=precio-@np
where codSer=@ncS
GO
/****** Object:  StoredProcedure [dbo].[descuentoAA]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[descuentoAA]
(@np float,
@ncS varchar(50))
as 
update Detalle_Servicio set precio=precio+@np
where codSer=@ncS
GO
/****** Object:  StoredProcedure [dbo].[descuentoAAA]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[descuentoAAA]
(@np float,
@ncS varchar(50))
as 
update Detalle_Servicio set precio=precio-@np
where codSer=@ncS
GO
/****** Object:  StoredProcedure [dbo].[muestraProductos21]    Script Date: 5/18/2023 8:12:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[muestraProductos21](@x varchar(50), @f decimal(4,2))
as 
begin
	select concat (p.nombre,' ',p.paterno,' ',p.materno) as 'Personal'
	from Servicio se, Solicitud so, Personal p
	where so.codSer = se.codSer AND so.codSup = p.codPrs AND se.nombre = @x AND
	so.fecha =@f
	end
GO
USE [master]
GO
ALTER DATABASE [db1] SET  READ_WRITE 
GO
