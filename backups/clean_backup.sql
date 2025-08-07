--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18
-- Dumped by pg_dump version 14.18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: Type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Type" AS ENUM (
    'FORD',
    'GM',
    'NISSAN'
);


ALTER TYPE public."Type" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: FordName; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FordName" (
    id integer NOT NULL,
    name text NOT NULL,
    "ownerId" integer NOT NULL,
    "HWID" text
);


ALTER TABLE public."FordName" OWNER TO postgres;

--
-- Name: FordName_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."FordName_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."FordName_id_seq" OWNER TO postgres;

--
-- Name: FordName_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."FordName_id_seq" OWNED BY public."FordName".id;


--
-- Name: Token; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Token" (
    id integer NOT NULL,
    "orderNumber" text NOT NULL,
    "purchasedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "ownerId" integer NOT NULL,
    type public."Type" NOT NULL,
    valid boolean DEFAULT true NOT NULL
);


ALTER TABLE public."Token" OWNER TO postgres;

--
-- Name: Token_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Token_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Token_id_seq" OWNER TO postgres;

--
-- Name: Token_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Token_id_seq" OWNED BY public."Token".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    "shopifyId" bigint NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    phone text,
    company text,
    address text,
    software boolean DEFAULT false NOT NULL,
    "nissanCount" integer DEFAULT 0,
    "gmCount" integer DEFAULT 0,
    "fordCount" integer DEFAULT 0,
    passthrough text,
    "fordName" text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: FordName id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FordName" ALTER COLUMN id SET DEFAULT nextval('public."FordName_id_seq"'::regclass);


--
-- Name: Token id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Token" ALTER COLUMN id SET DEFAULT nextval('public."Token_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: FordName; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FordName" (id, name, "ownerId", "HWID") FROM stdin;
1	SEkeys3	277	B7C6-43EC-4BB1-1926-7073-71F8-F6D8-7304
2	SEkeys6	345	CAE4-E81C-E894-E820-57AC-986F-6FA2-1757
3	SEkeys8	346	CF34-EF70-7B56-BD6D-BA4A-890E-50D7-A778
4	SEkeys12	257	16B5-7091-93C9-0684-DC12-A482-4A03-4AB8
5	SEkeys21	306	E46B-16A0-FB11-1160-04F4-7372-9F90-AA95
6	SEkeys26	340	B7B7-2487-6AE8-CBB3-38A3-92EB-5B72-0DE7
7	SEkeys49	5	CF51-5B2A-B837-7517-1B83-A5C9-B265-4951
10	SEkeys52	349	6B8B-B9D7-8207-F365-7FBC-6438-63DF-D55E
11	SEkeys53	304	25D9-B25A-555B-73AB-CFD6-D915-BF23-BC32
12	SEkeys56	19	6830-20E5-C6EB-F9C0-5C4D-A3F0-2208-9FF2
13	SEkeys58	350	1BBF-BC94-9B42-BD1F-CC1E-0922-FF4B-1FBD
14	SEkeys59	260	EF93-6373-CCB0-D5DB-B91D-9A8E-8E06-8061
15	SEkeys61	291	0C66-6FB3-EDD8-691B-5A12-7291-D965-9C10
16	SEkeys62	291	5E89-DEC2-A1DC-06B9-0286-AFA9-96E1-BDB6
17	SEkeys65	351	88EB-273C-B220-D6B6-2273-2DE9-F8DD-0100
18	SEkeys67	232	D0A9-0E7B-CAA2-75F7-25A3-757A-D9E3-42C5
19	SEkeys68	352	98CF-C513-8037-3432-460B-7F85-133A-5939
20	SEkeys73	353	1955-18A9-9D06-2FAB-8873-27A9-08D0-2986
21	SEkeys82	310	DF69-ED33-B99F-3C4A-D6C8-5424-F485-CBAA
22	SEkeys87	354	0BBF-1BC1-2CFC-9E13-90AB-23CE-4BB5-C86C
23	SEkeys90	355	7BFB-BE3E-9E81-9A16-3DA6-DE37-CA12-F03D
24	SEkeys97	208	54A5-FA85-4E6C-E048-AD36-9505-41E9-0071
8	SEkeys50	5	null
\.


--
-- Data for Name: Token; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Token" (id, "orderNumber", "purchasedAt", "ownerId", type, valid) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, "shopifyId", firstname, lastname, email, phone, company, address, software, "nissanCount", "gmCount", "fordCount", passthrough, "fordName") FROM stdin;
6	6307309912271	Yakov	Szender	jacob@surelockkey.com		Surelocksmith	6520 Missy Dr, Dallas, TX, US, 75252	f	0	0	0	\N	\N
7	6307181822159	Idan	Cohen	idancohen75@gmail.com		Embassy locksmith	4930 Cheena Drive, Houston, TX, US, 77096	f	0	0	0	\N	\N
8	6306475409615	Matt	Childers	david@sparemecarkeys.com			2105 broad acres rd, Riverton, WY, US, 82501	f	0	0	0	\N	\N
9	6305782300879	Mekko	Williams	bmfmekko@gmail.com		M&M locksmith services LLC	570 Cloverdale Avenue, Cincinnati, OH, US, 45246	f	0	0	0	\N	\N
10	6305703231695	ryan	grelock	ryan-hounddog@comcast.net		mobile car keys express	po box 28, Smyrna, DE, US, 19977	f	0	0	0	\N	\N
11	6302847992015	Lady	Gibbs	LADYLOCKSMITH@GMAIL.COM		Ladylocksmith	3129 Western Branch Boulevard, Chesapeake, VA, US, 23321	f	0	0	0	\N	\N
12	6302779637967	John	Stewarr	autokeys2003@yahoo.com		The LockGuys of Thomaston	1434 U.S. 19, Thomaston, GA, US, 30286	f	0	0	0	\N	\N
13	6300331475151	Illay	Swisa	swisa2300@gmail.com			220 North Meridian Street 922, Indianapolis, IN, US, 46204	f	0	0	0	\N	\N
15	6296484905167	ousama	khan	primeautolocksmith@gmail.com		prime auto locksmith inc	8464 164th Street, Jamaica, NY, US, 11432	f	0	0	0	\N	\N
17	6293737865423	Masoud	Tangestani	msh@starkeyandremote.com			6601 Basalt Drive, Plano, TX, US, 75024	f	0	0	0	\N	\N
18	6286969766095	Mohamad	Mohamad	615locksmith@gmail.com		615 locksmith	7028 Sonya Drive, Nashville, TN, US, 37209	f	0	0	0	\N	\N
20	6280609169615	Israel	Abecassis	israelab98@gmail.com		Amm	2001 N Scottsdale Rd, Scottsdale, AZ, US, 85257	f	0	0	0	\N	\N
21	6280229191887	Welton	Ribeiro	welton.ribeiro@eaata.pro	+5511953788812	EAATA	1325 NW 98th Ct ste 6, Doral, FL, US, 33172	f	0	0	0	\N	\N
22	6280049524943	Sean	McShane	sean_mcshane@yahoo.com			2631 Babcock Road, Vienna, VA, US, 22181	f	0	0	0	\N	\N
23	6279511146703	John	Holmes	johnsholmes24@gmail.com			1990 Eastridge Cir, Madison, MS, US, 39110	f	0	0	0	\N	\N
24	6278887178447	Cameron	Milton	handycam999@gmail.com			106 Gayle Drive, Millen, GA, US, 30442	f	0	0	0	\N	\N
25	6278832685263	Lior	Levi	liorlevi29@gmail.com			6629 Royer Ave, West Hills, CA, US, 91307	f	0	0	0	\N	\N
26	6276075913423	ANDREW	ARROYO	buickgransport455@gmail.com		Locksmith surgeon	14497 W VERDE LN, Goodyear, AZ, US, 85395-8335	f	0	0	0	\N	\N
27	6275722543311	El Roo	Butler	c4autokeys@gmail.com			1011 Commerce Drive, Prescott, AZ, US, 86305	f	0	0	0	\N	\N
28	6274276819151	Andrew	Torres	drew@coastlinerecoveryservices.com		Coastline recovery services	15133 S Broadway, Gardena, CA, US, 90248-1821	f	0	0	0	\N	\N
30	6274241888463	Milton	Rivas	miltonrivas5625@gmail.com			16902 Poplar Hill Street, Houston, TX, US, 77095	f	0	0	0	\N	\N
31	6272934707407	Hanniel	Espinosa	rekeylands@gmail.com		Re-Key Lock & Security	37518 Little Sycamore st., Palmdale, CA, US, 93552	f	0	0	0	\N	\N
32	6272030474447	Shai	shitrit	jsrr1881@gmail.com		Bh locksmith	5900 n braeswood apt 119, Houston, TX, US, 77074	f	0	0	0	\N	\N
33	6270936449231	Doug	Ruble	van360@comcast.net		As fast Action locksmith llc	3850 Southeast 82nd Avenue #66175, Portland, OR, US, 97290	f	0	0	0	\N	\N
34	6270484742351	Ben	Sattell	benpopalock@gmail.com			571 Haverty Court Suite U, Rockledge, FL, US, 32955	f	0	0	0	\N	\N
35	6269180903631	Rinat	Morad	sagijnarkis@gmail.com		Ben lock and safe inc	111 Haddonfield-Berlin Road, Cherry Hill Township, NJ, US, 08034	f	0	0	0	\N	\N
36	6268746137807	Justin	Schander	schander.justin@aol.com			1890 East Appleby Road, Gilbert, AZ, US, 85298	f	0	0	0	\N	\N
37	6268265660623	Daniel	Yordanov	denko8901@gmail.com		Bull Star Locksmith	10904 Roderick Lawson Lane, Austin, TX, US, 78754	f	0	0	0	\N	\N
38	6267459731663	Shai	Peretz	shai_2006@hotmail.com			1296 Rue Tecumseh, Montr├⌐al, QC, CA, H9A 3G3	f	0	0	0	\N	\N
39	6267146895567	Yarin	Yitshak	forged-busboys.6g@icloud.com			3604 Grand Ave 1, Oakland, CA, US, 94610	f	0	0	0	\N	\N
40	6265540149455	Yosef	Baum	yonebaum@gmail.com			106 Remsen Ave #5E, BROOKLYN, NY, US, 11212	f	0	0	0	\N	\N
41	6262739534031	Dia	Suyouri	nwkeyway@gmail.com		Northwest Keyway	9040 kennedy ct 204, orland park, IL, US, 60462	f	0	0	0	\N	\N
42	6262094725327	Omer	Tartakovsky	24.7locksmithnj@gmail.com			370 Smithburg Rd, Manalapan, NJ, US, 07726	f	0	0	0	\N	\N
43	6260165574863	yuval	ozarko	ozarkoy@gmail.com			281 Belgian Drive Apt 10206, West Melbourne, FL, US, 32904	f	0	0	0	\N	\N
44	6259808305359	yosef	ishaki	kingservices69@gmail.com			5371 Southwest 32nd Terrace, Fort Lauderdale, FL, US, 33312	f	0	0	0	\N	\N
45	6259669663951	Elroi	Butler	eb.ccautokeys@gmail.com		C.C. AUTO KEYS	517 North Cortina Street, Prescott Valley, AZ, US, 86327	f	0	0	0	\N	\N
46	6259618644175	Yakov	Szender	logisics@surelockkey.com			6732 Dapper Dr, McKinney, TX, US, 75070	f	0	0	0	\N	\N
47	6259597967567	vaaknin	orel	orelvaaknin1995@gmail.com			2041 Lafayette Street, Pittsburgh, PA, US, 15218	f	0	0	0	\N	\N
48	6259547308239	Tomer	Nidam	tomernim@icloud.com			480 Ne 31 St, Miami, FL, US, 33137	f	0	0	0	\N	\N
49	6259436683471	Ben	Brignac	ben@lafayettelocksmith.com		Lafayette Locksmith	411 Kaliste Saloom Road, Lafayette, LA, US, 70508	f	0	0	0	\N	\N
50	6258935169231	Omri	Ohayon	omriohayon135@gmail.com			360 E Market St, Indianapolis, IN, US, 46204	f	0	0	0	\N	\N
51	6258586353871	Jesus	Greer	alonsogreer@gmail.com		Route 80 Auto	3226 W Van Buren St., Phoenix, AZ, US, 85031	f	0	0	0	\N	\N
52	6255564161231	john	Egan	nobull1kevin@gmail.com		No Bulllocksmith	367 Fountain St unit 1a, Pawtucket, RI, US, 02860	f	0	0	0	\N	\N
19	6282386538703	Kolade	Akinyemi	00faculty_sawmill@icloud.com			P.O Box 35013, St Petersburg, FL, US, 33705	t	0	0	0	\N	\N
14	6299827175631	Alejandro	Cajigas	alexcajigas23@gmail.com			2269 Eastwood Dr SW, Snellville, GA, US, 30078	f	0	0	0	\N	AlejandroCajigas-OEM854
5	6311357087951	Eliran	Nachum	bcdoorsmith@gmail.com		San Diego doors & locksmith	5155 Luigi Terrace 20, San Diego, CA, US, 92122	t	0	0	0	\N	\N
53	6255008219343	avraham	kempe	chaimkempe@gmail.com		quickey locksmith	4419 osby dr, houston, TX, US, 77096	f	0	0	0	\N	avrahamkempe-OEM854
54	6254960115919	Yaron	Hefter	yaronhefter@gmail.com		Magic Key Locksmiths	5553 PRAIRIE SCHOONER DR, COLORADO SPGS, CO, US, 80923	f	0	0	0	\N	\N
55	6254236565711	martin	lopez	marconylocks@gmail.com		Marcony Locks	6736 Panorama Drive, Riverbank, CA, US, 95367	f	0	0	0	\N	\N
56	6254205305039	Marco	Jaquez	advanceauto92@gmail.com		Advance Auto Locksmith	525 South Railroad Avenue, Santa Maria, CA, US, 93458	f	0	0	0	\N	\N
57	6253633667279	Leo	Simon	leonsimon@ymail.com			1274 E 126 Th St, Los ├üngeles, CA, US, 90059	f	0	0	0	\N	\N
58	6253552992463	Samuel	Martinez	samuelmartinez21@yahoo.com			11011 country ridge lane, Forney, TX, US, 75126	f	0	0	0	\N	\N
59	6250844455119	Daniel	Lopez	DanielLopez3060@icloud.com			749 South Duncan Ave, East Los Angeles, CA, US, 90022	f	0	0	0	\N	\N
60	6250266427599	Juan	Meraz	merazjam12@gmail.com		Dickens Locksmith	47 State Highway 150 Loop DICKENS LOCKSMITH, Bastrop, TX, US, 78602	f	0	0	0	\N	\N
61	6249757835471	Thomas	Coulter	locks15@hotmail.com		Flea market lock and key	5460 County Road 352, Keystone Heights, FL, US, 32656	f	0	0	0	\N	\N
62	6249239445711	Frankie	Janisch	frankiej_pm@yahoo.com			14614 North 40th Way, Phoenix, AZ, US, 85032	f	0	0	0	\N	\N
63	6249189638351	James	Gunn	jrgunner43@hotmail.com			11721 Little River Way, Parrish, FL, US, 34219	f	0	0	0	\N	\N
64	6248747139279	Khaled	Nagi	khaled.g.nagi@gmail.com			6419 Jacqueline Arbor Drive, Tampa, FL, US, 33617	f	0	0	0	\N	\N
65	6248084537551	David	Flores	thekeysquad@gmail.com		the Key Squad	10327 Bridle ct, hagerstown, MD, US, 21740	f	0	0	0	\N	\N
66	6246456426703	Husam	Toubasey	husam.r.t@hotmail.com			1000 Attica Lane, Plano, TX, US, 75094	f	0	0	0	\N	\N
67	6246428344527	Jos├⌐	Mendez	carlos_da_5@hotmail.com			13408 Van Nuys Boulevard, Los Angeles, CA, US, 91331	f	0	0	0	\N	\N
68	6245912248527	Paul	Breaux	pjbreaux721@gmail.com			109 North Bud Street, Scott, LA, US, 70583	f	0	0	0	\N	\N
69	6245834621135	Alvaro Jose	Herrera	alvaro@llavesla10.com.co		llavesla10	Calle 10 # 43-14 LLAVESLA10, Medellin, ANT, CO, 05001000	f	0	0	0	\N	\N
70	6245784355023	Dave	Faichney	dave@thelockguyschattanooga.com		The Lock Guys of Chattanooga	3911 North Mission Oaks Drive, Chattanooga, TN, US, 37412	f	0	0	0	\N	\N
71	6245371543759	yogev	edri	locksmith_247@yahoo.com			9620 w 11th Ave, Lakewood, CO, US, 80215	f	0	0	0	\N	\N
73	6243498918095	Hani	djabour	hanidjabour1@gmail.com			18116 gantry dr, Pflugerville, TX, US, 78660	f	0	0	0	\N	\N
74	6243259023567	One	Locksmith	onelocksmith@yahoo.com			6804 Rosewood Ct, Tampa, FL, US, 33615	f	0	0	0	\N	\N
75	6242986754255	victor	fazio	victor51@optonline.net		hi tech alarms	1614 Kennedy Boulevard, Jersey City, NJ, US, 07305	f	0	0	0	\N	\N
76	6240104054991	John	Othman	austinsnapkeys@gmail.com			19717 Caroline Harrison st, Manor, TX, US, 78653	f	0	0	0	\N	\N
77	6240028885199	daniel	Waslenko	dan@danskeys.com		dan's lock and key	8730 New Falls Road, Levittown, PA, US, 19054	f	0	0	0	\N	\N
78	6239063802063	Vladimir	Gonz├ílez	vladimirmnv48@gmail.com		M&V Auto El├⌐ctric	10222 Norwich Avenue, Los Angeles, CA, US, 91345	f	0	0	0	\N	\N
79	6238996463823	Norman	Foster	mgd1mgd1@yahoo.com			19218 Calico Place Ln, Cypress, TX, US, 77429	f	0	0	0	\N	\N
80	6238976016591	Anas	Shouman	219locksmith@gmail.com		219 locksmith	609 Ridge Rd, Munster, IN, US, 46321	f	0	0	0	\N	\N
81	6238414962895	Ohad	Marima	orlocksmithaz@gmail.com		Or locksmith	4625 East Broadway Boulevard 102, Tucson, AZ, US, 85711	f	0	0	0	\N	\N
82	6237990912207	Andrew	Hightower	hightower1989@hotmail.com		ATH Locksmith llc	7599 West Krall Street, Glendale, AZ, US, 85303	f	0	0	0	\N	\N
83	6237946675407	Moshe	Uziel	mumoshe@gmail.com		MyKey Locksmith	6754 Silver Ridge Lane, Greenacres, FL, US, 33413	f	0	0	0	\N	\N
84	6236435644623	Manhal	Dawood	manhal.casillas@gmail.com			779 N 1st St, El Cajon, CA, US, 92021	f	0	0	0	\N	\N
85	6236342681807	Milton	Rivas	keypro5625@gmail.com		A&M LockSmith	8524 Highway 6 N 570, Houston, TX, US, 77095	f	0	0	0	\N	\N
86	6235352301775	Manny	Friedman	mendi1232@gmail.com		Locksmith lion	169 Santa Clara Dr, Naples, FL, US, 34104	f	0	0	0	\N	\N
87	6234287669455	ammar	mahmoud	ammarsaadah94@gmail.com			11500 Summit West Boulevard, Temple Terrace, FL, US, 33617	f	0	0	0	\N	\N
88	6234243760335	lior	danovich	danovichlior@gmail.com			2814 gallant hills drive, las vegas, NV, US, 89135	f	0	0	0	\N	\N
89	6234188742863	Samvel	Stepanian	parlando87@ukr.net			16709 Dunaverty place, Charlotte, NC, US, 28277	f	0	0	0	\N	\N
90	6234180747471	John	Holmes	magnolialocksmithcompany@gmail.com		Magnolia Locksmith	291 Highway 51, Ridgeland, MS, US, 39157	f	0	0	0	\N	\N
91	6234152468687	Rakan	Alshawabkeh	rakaneid777@gmail.com			4415 Plantation Creek Dr, Missouri City, TX, US, 77459	f	0	0	0	\N	\N
92	6233294569679	Justin	Aaron	justinjaaron02@gmail.com			724 Oxford Circle, Tyler, TX, US, 75703	f	0	0	0	\N	\N
93	6232970133711	Jorge	Carmona	jcslocksmith@gmail.com		Jcs locksmith	6910 South 164th Street, Omaha, NE, US, 68136	f	0	0	0	\N	\N
94	6232559583439	Rolando	Lopez	rolandl@pilgrimlocksmiths.com		Pilgrim locksmith	6511 Benwood Crst, San Antonio, TX, US, 78238	f	0	0	0	\N	\N
95	6231379935439	Christopher	Holloway	christopher.s.holloway@uscis.dhs.gov			10207 Dressage Dr, Upper Marlboro, MD, US, 20772	f	0	0	0	\N	\N
96	6231270424783	Nicholas	Pollina	keysolutions229@gmail.com		Key Solutions Locksmith	125 Redbud Road, Albany, GA, US, 31705	f	0	0	0	\N	\N
97	6230829957327	Barel	Maayan	expertlocksmithdfw@gmail.com		ABM Locksmith LLC	5622 Harvest Hill Rd, Dallas, TX, US, 75230	f	0	0	0	\N	\N
98	6230320054479	Mohamad	Fareeq	autorepairalpine@gmail.com		Alpine Auto RepaiR	5840 Se 17th Ave, PortlanD, OR, US, 97202	f	0	0	0	\N	\N
99	6229582643407	Holly	Wood	woodfamilylocksmith@gmail.com	+18338562533	Wood Family Locksmithing	137 Bruce Ave `, Timmins, ON, CA, P0N 1H0	f	0	0	0	\N	\N
100	6228499792079	Masoud	Tangestani	masoud_tangestani@yahoo.com			6601 Basalt Drive, Plano, TX, US, 75024	f	0	0	0	\N	\N
101	6228468039887	alyatseel	Small	elysmalls23@gmail.com			3311 Sixth Ave SW A302, Olympia, WA, US, 98502	f	0	0	0	\N	\N
102	6228406272207	Sunil	Silpot	cuttingedgelocksmiths@gmail.com			8241 Nw 51st Street, Lauderhill, FL, US, 33351	f	0	0	0	\N	\N
103	6227984482511	bin	xu	samthemobilelocksmith@gmail.com		Sam The Mobile Locksmith	11985 Preddy Dr, Delta East, BC, CA, V4E 2K9	f	0	0	0	\N	\N
104	6227818283215	brayaham	martinez	mbrayaham@gmail.com			Davis 743, Santa Rosa, CA, US, 95401	f	0	0	0	\N	\N
105	6227781451983	kaveh	akrai	ihsanhelena@gmail.com			3136 Locust Hollow, Nolensville, TN, US, 37135	f	0	0	0	\N	\N
106	6227713949903	Yosef	Ishaki	joeyishaki@hotmail.com			5371 sw 32nd terr, Fort Lauderdale, FL, US, 33312-7903	f	0	0	0	\N	\N
107	6227536281807	Jeremy	Powell	jeremyinakron@icloud.com			3090 Shelley Lynn Drive, Fairlawn, OH, US, 44333	f	0	0	0	\N	\N
108	6227196608719	Adam	Sleiman	a.sliman.231@gmail.com			6419 Rexford Way, Carmichael, CA, US, 95608	f	0	0	0	\N	\N
109	6226351423695	Andrew	Hightower	athlocksmith@gmail.com		ATH Locksmith LLc	7599 w krall st, glendale, AZ, US, 85303	f	0	0	0	\N	\N
110	6226295718095	Clifton	Trail	aacrlocksmith@gmail.com		AACR Locksmith	P.O. Box 50238, Myrtle Beach, SC, US, 29579	f	0	0	0	\N	\N
111	6226284642511	Akil	Slade	akilslade@gmail.com			3006 Raymond Ct, Fort Washington, MD, US, 20744	f	0	0	0	\N	\N
112	6225710973135	Abdelrahman	Alasmar	falconlocksmith93@gmail.com		Falcon	2119 Westheimer Rd, Houston, TX, US, 77098	f	0	0	0	\N	\N
113	6223218409679	Ricardo	Rodriguez	atlanticlockandkey7641@gmail.com		Atlantic Lock and Key	303 n Miramonte ave, Ontario, CA, US, 91764	f	0	0	0	\N	\N
114	6222361034959	jason	vanderford	atlocksmithservice@gmail.com	+19013315594		10003 Meadow Lane, Olive Branch, MS, US, 38654	f	0	0	0	\N	\N
115	6221577683151	Howree	rahman	hawreerahman101@gmail.com			621 Sugarmill Drive, Nashville, TN, US, 37211	f	0	0	0	\N	\N
116	6217743204559	Nicole	Zufelt	na_az@live.com			Po box 3456, Durango, CO, US, 81302	f	0	0	0	\N	\N
117	6216945860815	Ahmed	Mohammed	ahmed.hameed1988@gmail.com		A1 Locksmith	8603 Overhill Drive, Manassas park, VA, US, 20111	f	0	0	0	\N	\N
118	6216771469519	Shannon	Necaise	snecaise68@gmail.com			26316 Elm Rd, Pass Christian, MS, US, 39571	f	0	0	0	\N	\N
120	6214763544783	Vladyslav	Miroshnikov	vladonas@gmail.com			1946 bergen ave apt 1b, Brooklyn, NY, US, 11234	f	0	0	0	\N	\N
121	6214160220367	Javier	Rosales	javi.rh04@hotmail.com		Casa	Francisco gana 4042 Casa, Arica, AP, CL, 1000000	f	0	0	0	\N	\N
122	6211989438671	Md Emdadul	Hoque	hoque1100@gmail.com		USBD Locksmith services	105-24 78th Street 2nd floor, Ozone Park, NY, US, 11417	f	0	0	0	\N	\N
123	6210902982863	Lock	Solid Tx	lock@locksolidtx.com		Lock Solid tx	513, Thrasher Lane, Austin, TX, US, 78741	f	0	0	0	\N	\N
124	6210902393039	Jerry	LOPEZ	jerrycutlass@gmail.com		jerry lopez	513 Thrasher Ln, Austin, TX, US, 78741	f	0	0	0	\N	\N
125	6210280915151	Kyle	Elliott	nwalocksmith@gmail.com		Discount Locksmith	1470 Lexington Circle, Springdale, AR, US, 72762	f	0	0	0	\N	\N
127	6207471583439	Ricardo M	Rodriguez	atlaticlockandkey7641@gmail.com		Atlantic Lock and Key	303 North Miramonte Avenue, Ontario, CA, US, 91764	f	0	0	0	\N	\N
128	6206724440271	Nahman David	Lecover	lecoverdavid@gmail.com			182 Via San Nicolo, Palm Desert, CA, US, 92260	f	0	0	0	\N	\N
129	6206342725839	Danil	Bolotin		+16468815457		7169 Trysail Circle, Tampa, FL, US, 33607	f	0	0	0	\N	\N
130	6206342398159	Paul	WIens	info@freedomsales.ca		Freedom Sales Ltd	99 Creekside Drive, Steinbach, MB, CA, R5G 0A4	f	0	0	0	\N	\N
132	6205505011919	Victor	Garcia	victor3527@gmail.com		Garcia Locksmith	2102 Red Valley Drive, Houston, TX, US, 77049	f	0	0	0	\N	\N
133	6205052354767	Mohammad	Jaber	jabermohammad832@gmail.com			105 Franklin Street, Lynn, MA, US, 01902	f	0	0	0	\N	\N
134	6203224031439	ahmed	mohammed	ahmed.hammed1988@gmail.com			8603 Overhill Drive, Manassas, VA, US, 20111	f	0	0	0	\N	\N
135	6202179977423	Hai	Avraham	haiavraham@icloud.com		Pro locksmith	5811 Braesheather Dr, Houston, TX, US, 77096	f	0	0	0	\N	\N
136	6200624742607	Robert	Brooks	cltlocksmith@gmail.com			7400 hoffner drive, Harrisburg, NC, US, 28075	f	0	0	0	\N	\N
139	6199986356431	Ido	Yehudai	idohehudai92@gmail.com			Middlebrook Road 4196, Orlando, FL, US, 32811	f	0	0	0	\N	\N
140	6199983309007	Jesus	Blanco	bjesus1991@gmail.com		Mayor Locksmith inc	9230 Southwest 11th Street, Miami, FL, US, 33174	f	0	0	0	\N	\N
141	6199919149263	Wesley	Simeon	wessimeon@gmail.com		Keydecode	531 Northwest 108th Terrace, Miami, FL, US, 33168	f	0	0	0	\N	\N
144	6199384899791	Cathy	Cordova	integrity2lockandkey@gmail.com	+15754434044	The Lock Shop	906 North Florida Avenue, Alamogordo, NM, US, 88310	f	0	0	0	\N	\N
146	6196696219855	Jose	Venegas	accesslocknsafe@gmail.com	+15756406701	Access lock and safe	2205 Turrentine Drive, Las Cruces, NM, US, 88005	f	0	0	0	\N	\N
147	6196472873167	Barel	Maayan	barelmaayan13@gmail.com			5812 Harvest Hill Road, Dallas, TX, US, 75230	f	0	0	0	\N	\N
148	6195314065615	Lady	Locksmith	gibbsladylocksmith@gmail.com			3129 Western Branch Blvd, Chesapeake, VA, US, 23321-5516	f	0	0	0	\N	\N
149	6193786519759	Angel	Toledo	angeltoledovip@gmail.com		Tu cerrajero	1186 av Americo Miranda, San Juan, PR, US, 00921	f	0	0	0	\N	\N
150	6191218458831	William	Garcia	empirelocksmith714@gmail.com		Empire Locksmith LLC	10621 Beach Blvd, Stanton, CA, US, 90680-2346	f	0	0	0	\N	\N
151	6191215837391	Mohammad	Alsukhni	bd.mohammad@hotmail.com			9900 Richmond Avenue, Houston, TX, US, 77042	f	0	0	0	\N	\N
152	6190863941839	Nicole	Zufelt	bobslockandkeyofdurango@gmail.com	+19707591135		PO box 3456, Ignacio, CO, US, 81302	f	0	0	0	\N	\N
119	6216253800655	William	Rosado	preferredlocksmithservice@gmail.com			3858 East Gulf to Lake Highway, Inverness, FL, US, 34453	f	0	0	0	\N	
126	6209485439183	ATC	Lock & Key, LLC	jamey.brown@atclocks.com		ATC Lock & Key	160 WINDING CREEK RD, EATONTON, GA, US, 31024-7328	f	0	0	0	\N	ATCLock & Key, LLC-OEM854
145	6199029661903	MARCONY	LOCKS	marco.ny@live.com		Marcony Locks & Auto Mobile Services LLC	6736 Panorama Drive, Riverbank, CA, US, 95367	f	0	0	0	\N	
153	6189860913359	Islam	Alhelo	islamalhelo1992@gmail.com			7510 Burgoyne Rd 1334, Houston, TX, US, 77057	f	0	0	0	\N	\N
154	6189707362511	SHLOMO	SHAMAMA	seanshamama@icloud.com		USA	3859 South Valley View Boulevard, Las Vegas, NV, US, 89103	f	0	0	0	\N	\N
155	6187930943695	Diego	Barrera	barrera.7@icloud.com			10222 W College Ave, Hales Corners, WI, US, 53130	f	0	0	0	\N	\N
156	6187199267023	Abigail	Hoskinson	info@5starlockandkey.com		5 star lock and key	542 Rue Carnot, carencro, LA, US, 70520	f	0	0	0	\N	\N
157	6185552052431	Victor	Useche	upicktampalocksmith@gmail.com		Upick Locksmith LLC	4610 N Lois Ave, Tampa, FL, US, 33614	f	0	0	0	\N	\N
158	6183617888463	PEDRO	SANTACRUZ	miguelamericanrepo@gmail.com			16318 Malibu Dr, Weston, FL, US, 33326	f	0	0	0	\N	\N
159	6183201276111	MATTHEW	SUMMS	mattsumms@summs-skip.com		SUMMS SKIP	2616 QUALITY CT, VIRGINIA BEACH, VA, US, 23454	f	0	0	0	\N	\N
160	6181009555663	Ryan	Apodaca	mark.apodaca@icloud.com		Auto Unlock	3128 Eagle Boulevard H158, Brighton, CO, US, 80601	f	0	0	0	\N	\N
161	6180871373007	Clark	Williams	clark@integritykeytexas.com		Integrity Key Lock & Safe of Texas	3131 Daisy Meadow, New Braunfels, TX, US, 78130	f	0	0	0	\N	\N
162	6180645404879	Dillon	Olson	dillonolson92@yahoo.com		Affordable Car Keys LLC	2509 Huntington Woods Dr., Winston Salem, NC, US, 27103	f	0	0	0	\N	\N
163	6179997253839	Dustin	Craig	whiteroc63@gmail.com			11253 West Davis Lane, Avondale, AZ, US, 85323	f	0	0	0	\N	\N
164	6178358132943	Eliran	Peretz	cleautomontreal@gmail.com		Cle auto Montr├⌐al	222 Rue Mirabel, Dollard-des-Ormeaux, QC, CA, H9A 3J5	f	0	0	0	\N	\N
165	6177771258063	Jenice	Roper	roper485@gmail.com			1725 Mimosa Lane, Newcastle, OK, US, 73065	f	0	0	0	\N	\N
166	6177704444111	bobby	roland	crtprolock77@gmail.com			830 Lakeshore Circle, Warrior, AL, US, 35180	f	0	0	0	\N	\N
167	6177328169167	jamal	almajali	jamalalmajali7@gmail.com		MAGNUMLOCKSMITHLLC	4004 West River Place, Tampa, FL, US, 33603	f	0	0	0	\N	\N
169	6176591970511	Andrew	Fosher	thevillagelocksmith603@gmail.com	+16037038551	The Village Locksmith	54a Mill Street, Ashland, NH, US, 03217	f	0	0	0	\N	\N
170	6176376324303	Christopher	Torres	thehulk2203@yahoo.com		Mr.TΓÇÖs keys	13772 canyon ranch rd, roanoak, TX, US, 76262	f	0	0	0	\N	\N
171	6174417191119	ERIC	Irizarry	facilitocarkeys@outlook.com		Facilito car keys	Villa esmeralda Calle ambar 6, Penuelas, PR, US, 00624	f	0	0	0	\N	\N
173	6173653270735	Rodolfo	Camacho jr	libe415@gmail.com		Liberty Locksmith of Orange County inc.	117 Liberty St, Newburgh, NY, US, 12550	f	0	0	0	\N	\N
174	6172957835471	Mordechai	Benlulu	moti2020@icloud.com			9846 N MacArthur Blvd 2205, Irving, TX, US, 75063	f	0	0	0	\N	\N
175	6172947480783	Nir	Rubinstein	shieldlock@gmail.com		SHIELD LOCKSMITH and SECURITY	5455 Avonshire Lane, Cumming, GA, US, 30040	f	0	0	0	\N	\N
176	6172861432015	Shaun	Henna	ultralockandkey@gmail.com			758 Kapahulu ave ste100 Pmb1039, Honolulu, HI, US, 96816	f	0	0	0	\N	\N
177	6172514484431	Rolando	Gavilan	preciselocksmithllc@gmail.com		Precise Locksmith llc	3195 West 2nd Avenue, Hialeah, FL, US, 33012	f	0	0	0	\N	\N
178	6171686666447	John	Othman	tonymike113@yahoo.com			19717 Caroline Harrison Street, Manor, TX, US, 78653	f	0	0	0	\N	\N
179	6170939523279	Paul	Wiens	paulwiens@freedomsales.ca		Freedom Sales Ltd	99 Creekside Drive, Steinbach, MB, CA, R5G 0A4	f	0	0	0	\N	\N
180	6168923635919	Eli	Moshel	elimoshel01@yahoo.com			147-60 76th Avenue Apt 1 first floor, Queens, NY, US, 11367	f	0	0	0	\N	\N
181	6167668392143	John	Thigpen	jthigp1234@gmail.com		Pop-A-Lock	1022 Hickman Street, Westlake, LA, US, 70669	f	0	0	0	\N	\N
182	6167286317263	Nicholas	DeSantis	newamsterdamlock@gmail.com			1817 West 13th St, Brooklyn, NY, US, 11223	f	0	0	0	\N	\N
184	6165347205327	Sean	McShane	artieslock@gmail.com	+17034705043	arties lock and key	11204 Lee Hwy, Fairfax, VA, US, 22030	f	0	0	0	\N	\N
185	6165036990671	Charles	Copeland	aardvarkaffordablelock@gmail.com		Aardvark Affordable Lock	4812 W. Creedance Blvd AZ8509, Glendale, AZ, US, 85310	f	0	0	0	\N	\N
187	6163842597071	John	Siebert	jsiebert919@gmail.com		Phantom	12320 S Village Cir, Davie, FL, US, 33325	f	0	0	0	\N	\N
188	6163285967055	Paul	WIens	wienspmw@gmail.com		Freedom Sales Ltd	99 Creekside Drive, Steinbach, MB, CA, R5G 0A4	f	0	0	0	\N	\N
189	6161882218703	Jose	Geovanny Martinez Hernandez	keys4carscorp@gmail.com			3 Garden St, Holtsville, NY, US, 11742	f	0	0	0	\N	\N
190	6160901112015	Andres	Estupinan Caicedo	aecmillos@gmail.com	+19714044924	Autopros	4804 Northeast 119th Street, Vancouver, WA, US, 98686	f	0	0	0	\N	\N
192	6159218966735	MARK	Lengyel	mkeys59@aol.com			11909 S. Funseth dr, Spokane, WA, US, 99223	f	0	0	0	\N	\N
193	6159189967055	Dariush	Pourmoghadam	troyway7@gmail.com		Around The Clock Locksmith	PO Box 1210, Mount Pleasant, SC, US, 29465	f	0	0	0	\N	\N
195	6157348241615	Anthony	Almaguer	tonyskeyslocksmith@gmail.com		Tony's Keys Express	8540 biloxi st, houston, TX, US, 77017	f	0	0	0	\N	\N
196	6157304365263	Dustin	Craig	support@mylocksmith365.com	+16233005729		11253 w davis ln, Avondale, AZ, US, 85323	f	0	0	0	\N	\N
197	6156768444623	Moran	Bodek	moranbodek@yahoo.com		Sure lock and key	1210 Chapel Street, New Haven, CT, US, 06511	f	0	0	0	\N	\N
198	6154790437071	David	Burnham	david@burnhamslocksmith.com		Burnhams Locksmith	1997 Winding Ridge CT, Winston Salem, NC, US, 27127	f	0	0	0	\N	\N
200	6153879781583	juan	montes	cabrera33314@gmail.com		American Repo	9737 NW 41st st, Doral, FL, US, 33178-2924	f	0	0	0	\N	\N
168	6177262665935	Chris	Torres	mr.tskeys@gmail.com			13772 Canyon Ranch Road, Roanoke, TX, US, 76262	f	0	0	0	\N	ChrisTorres-OEM854
199	6154689249487	Nathan	Roberts	jblocksmith34@gmail.com	+17275424749		101 S Highland Ave, Tarpon Springs, FL, US, 34689	f	0	0	0	\N	
201	6151614824655	Daryl	Keith	mrddk88@gmail.com			319 East Rio Vista Avenue, Burlington, WA, US, 98233	f	0	0	0	\N	\N
202	6151600046287	Jimmy	Rubio	jrjimmyrubio5@gmail.com		JJ Locksmith	5346 S Winchester Chicago, IL 60609, Chicago, IL, US, 60609-5642	f	0	0	0	\N	\N
203	6150593511631	Travis	Howell	travis@key-provision.com		Key Provision	1831 Gatepost Rd, Encinitas, CA, US, 92024	f	0	0	0	\N	\N
204	6149873762511	David	Green	hedgehogjr@bellsouth.net		Orange Grove Lock and Key	12302 Cold Springs Rd, Gulfport, MS, US, 39503	f	0	0	0	\N	\N
205	6147803971791	Rudy	Salgado	twoguyslocksmithllc@gmail.com	+15712390329		3747 Mark Dr, Alexandria, VA, US, 22305	f	0	0	0	\N	\N
207	6147330408655	Mike	Laughridge	mlaughridge1989@gmail.com			1553 North Milwaukee Street 320, Boise, ID, US, 83704	f	0	0	0	\N	\N
209	6146622980303	Daniel	Diederich	danielediederich@yahoo.com			4516 W Gary Dr, Chandler, AZ, US, 85226	f	0	0	0	\N	\N
210	6146446688463	Oriah	Puller	akajonson@yahoo.com	+19165592260	Op locksmith	4501 Circle 75 Pkwy, Atlanta, GA, US, 30339	f	0	0	0	\N	\N
211	6144646447311	ANDERSON	FONTE MOREIRA	afontemoreira@gmail.com	+16892361557		RUA TRAJANO PEREIRA GUIMARAES, 537, CAMPINAS, SP, BR, 13060-236	f	0	0	0	\N	\N
212	6137647399119	abdelrahman	al-asmar	abed.alasmar84@gmail.com		falcon locksmith llc	2119 Westheimer Road 1120, Houston, TX, US, 77098	f	0	0	0	\N	\N
213	6130543427791	Fouad	Fayad	fayadbeirut30@gmail.com			115 Gant Street, Morganton, NC, US, 28655	f	0	0	0	\N	\N
214	6129894326479	Mitch	Frank	frankslock417@gmail.com		On The Go Lock & Key LLC.	417 E Front St., Clare, IA, US, 50524	f	0	0	0	\N	\N
215	6124760006863	tal	yankovitz	yarinitzhak96@gmail.com		cheap locksmith	911 East Camelback Road 3048, Phoenix, AZ, US, 85014	f	0	0	0	\N	\N
216	6123821924559	igor	groysman	skynyc@me.com			1539 West Sam Houston Parkway South, Houston, TX, US, 77042	f	0	0	0	\N	\N
219	6122651582671	Alex	Fernandez	alex@browardcarkey.com		Broward Car Key	7368 GRANADA WAY, MARGATE, FL, US, 33063	f	0	0	0	\N	\N
220	6122137256143	Norman	Nost	alertlock123@gmail.com	+17136416641		5602 Tyler, Pearland, TX, US, 77581	f	0	0	0	\N	\N
221	6121590194383	Tonni	Velasco	tony7820@hotmail.com			12203 Chena Lake, San Antonio, TX, US, 78249	f	0	0	0	\N	\N
222	6121304817871	Vlad	Osadchyy	keyman5423@gmail.com			175 7th Street, Wheeling, IL, US, 60090	f	0	0	0	\N	\N
223	6121285353679	Abdel rahman	Al-asmar	abed.itunes@gmail.com			2119 Westheimer Rd 1120, Houston, TX, US, 77098	f	0	0	0	\N	\N
224	6121240363215	Amanda	De La Cruz	amanda@delacruzsecurity.com		DE LA CRUZ SECURITY LLC	2805 West Expressway 83 A, La Feria, TX, US, 78559	f	0	0	0	\N	\N
225	6120827191503	Almog	david	almogd07@gmail.com			13001 Waterford Wood Circle 308, Orlando, FL, US, 32828	f	0	0	0	\N	\N
226	6119780778191	Antonio	Velasco	sales@keymex.com			12203 Chena Lake, San Antonio, TX, US, 78249	f	0	0	0	\N	\N
227	6119634895055	Jeremy	Moncrief	jeremy0627@icloud.com			3235 Kerri Drive, Moody, AL, US, 35004	f	0	0	0	\N	\N
228	6119331922127	Oriah	Puller	oriyahu.butler@icloud.com			4501 Circle 75 Pkwy, Atlanta,, Smyrna, GA, US, 30339	f	0	0	0	\N	\N
230	6118999032015	Kevin	Rodriguez	kevinrdzuvo@gmail.com			Andador 3 8, H.matamoros, TAMPS, MX, 87380	f	0	0	0	\N	\N
231	6118932447439	ERIC	Irizarry	ericirizarry460@gmail.com		Facilito car keys	Villa esmeralda Calle ambar 6, Penuelas, PR, US, 00624	f	0	0	0	\N	\N
233	6118749733071	Al	Clark	gundewrecker@yahoo.com			3515 County Gate Rd, Memphis, TN, US, 38119	f	0	0	0	\N	\N
234	6118744588495	Kyle	Kyle	kylewgrubb@gmail.com			5422 Delaney Dr., Wentzville, MO, US, 63385	f	0	0	0	\N	\N
235	6118530908367	Avraham	Butler	locksmithgeneral503@gmail.com	+19719774498		16873 Nw Oak Creek Dr, Beaverton, OR, US, 97006	f	0	0	0	\N	\N
237	6113304641743	Alan	Litchy	alanl1974@hotmail.com			1900 S Fairway Ave, Springfield MO, MO, US, 65804	f	0	0	0	\N	\N
238	6112849002703	John	Cornelison	tehamalock@att.net		Tehama Lock	1015 Walnut St, Red Bluff, CA, US, 96080	f	0	0	0	\N	\N
239	6112217432271	Barel	Taig	doornkeylocksmith@gmail.com	+15616908233		2874 Bard Street, Palm Springs, FL, US, 33406	f	0	0	0	\N	\N
240	6100238893263	Yanir	Azulay	info@carkeyspro.com		Car Keys Pro	4609 W Belmont Ave, Chicago, IL 60641, USA, Chicago, IL, US, 60641	f	0	0	0	\N	\N
241	6099989266639	Ahmad	almofleh	almuflehahmad@outlook.com			1000 Attica Lane, Plano, TX, US, 75094	f	0	0	0	\N	\N
242	6099609288911	Mark	McCormick	thestumpjump@gmail.com			550 mechanic st, fitchburg, MA, US, 01420-2013	f	0	0	0	\N	\N
243	6079507202255	Eric	Sadler	sadlersolutionsllc@gmail.com		Sadler Solutions llc	301 W HILLVIEW ST, WINSLOW, AZ, US, 86047-2623	f	0	0	0	\N	\N
244	6071480156367	Russ	Sanzeris	sanzeris@gmail.com			288 South Main Street st3, Thomaston, CT, US, 06787	f	0	0	0	\N	\N
245	6065328128207	Jack	Hakimi	yaakovhakimi@gmail.com		AM PM LOCK	2514 Smith Avenue, Baltimore, MD, US, 21209	f	0	0	0	\N	\N
246	6065206526159	Chris	Kinningham	urgentlock@gmail.com			2737 Bridekirk Drive, ROUND ROCK, TX, US, 78664	f	0	0	0	\N	\N
247	6055918797007	Miguel	Cabrera	miguelangel1503@gmail.com			9737 nw 41st st, DORAL, FL, US, 33178	f	0	0	0	\N	\N
248	6054124028111	Joe	Barragan	boklocksmith@gmail.com		B-OK Locksmith	39505 Berkey Drive Unit B, Palm Desert, CA, US, 92211	f	0	0	0	\N	\N
249	6050274967759	Brian	Hargis	bowhead09@gmail.com		AAA Lock & Key	2227 Tubman Home Road, Augusta, GA, US, 30906	f	0	0	0	\N	\N
250	6043143831759	Tatiana	Yartseva	hopkinsandrew78@gmail.com	+19196706480		3301 McLain Street, Goldsboro, NC, US, 27534	f	0	0	0	\N	\N
217	6123720179919	Jake	Anderson	jakeandersonrrt@gmail.com			1282 Town Creek Road, Eden, NC, US, 27288	f	0	0	0	\N	
229	6119319863503	Alexandre	Marquinhos	alexfmarquinhos@gmail.com			758 2nd Street, Dunellen, NJ, US, 08812	f	0	0	0	\N	AlexandreMarquinhos-OEM854
232	6118752911567	David	Elhadad	dml247services@gmail.com		DML LOCKSMITH SERVICES	9100 Roundbluff Road, Plano, TX, US, 75025	t	0	0	0	\N	\N
208	6146710372559	John	Beardon	lockdocnorthga@gmail.com	+17067672728		8 Fire Tower Rd NE, Rome, GA, US, 30161	t	0	0	0	\N	\N
252	6039208100047	Alan	Litchy	advancedkeynew@outlook.com		Advanced Key	1900 S Fairway Ave, Springfield, MO, US, 65804	f	0	0	0	\N	\N
254	6031170633935	Corey	Thorbourne	keyedauto@gmail.com		Keyed Auto Locksmith	5001 Brodie Lane, Fort Mill, SC, US, 29707	f	0	0	0	\N	\N
255	6022905790671	Yakov	Szender	logistics@surelockkey.com			6520 Missy Drive, Dallas, TX, US, 75252	f	0	0	0	\N	\N
256	6016737018063	Marcos	Sanchez	locksmith_marcos1@outlook.com			576 Valley Brook Avenue c4, Lyndhurst, NJ, US, 07071	f	0	0	0	\N	\N
258	5992266170575	Mike	Frasher	biringers1859@gmail.com	+19137050661	Biringer's Shop and Service	100 East Kansas Street Ste h234, Lansing, KS, US, 66043	f	0	0	0	\N	\N
259	5982699782351	timothy	haft	timothyhaft@gmail.com			911 val aire place, walnut creek, CA, US, 94596	f	0	0	0	\N	\N
261	5965303939279	Derrick	Nichols	nicholsquikey@gmail.com		Nichols QuiKey	202 E Street, Clarksville, TN, US, 37042	f	0	0	0	\N	\N
262	5964128125135	Mike	Black	lanelockandkey@gmail.com		Lane Lock and Key	82929 Brookhurst Street, Creswell, OR, US, 97426	f	0	0	0	\N	\N
264	5951380160719	Wali	djabour	austinmobilelocksmith@yahoo.com			13400 Snow Fall Dr, Austin, TX, US, 78727	f	0	0	0	\N	\N
265	5938829820111	Andrew	Gonzales	andrewlocksmith623@gmail.com		Aurora Colorado locksmith 247	2844 South Ouray Way, Aurora, CO, US, 80013	f	0	0	0	\N	\N
266	5934718353615	Andrew	Taylor	lockdude3@cox.net			2202 Sicily Quay, Virginia Beach, VA, US, 23456	f	0	0	0	\N	\N
267	5932420923599	Carlos	Maramoros	rigoslocksmith@gmail.com		Rigos Locksmith	3035 West Van Buren Street, Phoenix, AZ, US, 85009	f	0	0	0	\N	\N
268	5929269461199	Matthew	Kayal	keyswithmatt@gmail.com	+12262015239	Keys with matt inc	13 Gloria Street, Kitchener, ON, CA, N0B 2E0	f	0	0	0	\N	\N
269	5927291158735	Bradley	Stites	ezinlocksmith@gmail.com		Ez in locksmith	324 Sherri Drive, Colorado Springs, CO, US, 80911	f	0	0	0	\N	\N
270	5915755413711	Galo	Burbano	waynekeylessshop@gmail.com		The Keyless Shop	410 US Highway 46 The Keyless Shop, Fairfield, NJ, US, 07004	f	0	0	0	\N	\N
271	5912215257295	Scott	Johnson	sxottj@yahoo.com		Fulmer's Locksmith	11 Fuller Rd, Conway, AR, US, 72032	f	0	0	0	\N	\N
273	5881193332943	Hamad	Mahfouz	aaccesslockandkey@gmail.com		AAccess Lock and Key	2132 Arbor Hill Parkway, Birmingham, AL, US, 35244	f	0	0	0	\N	\N
274	5864220393679	Saif	Awnie	autokeysd@gmail.com		Auto Key SD	515 West Madison Avenue 28, El Cajon, CA, US, 92020	f	0	0	0	\N	\N
275	5787227914447	Meitar		meitarlavi744@gmail.com			41 Grand Street, South Portland, ME, US, 04106	f	0	0	0	\N	\N
276	5688926699727	Adam	McKenzie	keywiz126@yahoo.com		ASAP	2608 32nd Ave North, Birmingham, AL, US, 35207	f	0	0	0	\N	\N
278	5677909213391	Yoandi	Valdes	flashlocksmith1@gmail.com		flash locksmith inc	2716 se 28th st, Ocala, FL, US, 34471	f	0	0	0	\N	\N
279	5677362446543	Daniel	Leyva	lockmasters3@gmail.com	+15592700949	Lock Masters Inc	2240 East McKinley Avenue, Fresno, CA, US, 93703	f	0	0	0	\N	\N
280	5671636828367	Ian	Rock	irock@drivenstyle.com			505 Eastwood Drive, Kouts, IN, US, 46347	f	0	0	0	\N	\N
281	5660304670927	Ryan	Fife	ryfi9@aol.com	+19376043593		4378 Sharpsville Rd, Hillsboro, OH, US, 45133	f	0	0	0	\N	\N
282	5659371831503	Yedidia	Dahan	mrkey@mrkeynj.com			9 Iris Drive, Jackson, NJ, US, 08527	f	0	0	0	\N	\N
283	5657415844047	Jacob	Schwartz	abclockguy@yahoo.com			Po box 9692, Fort wayne, IN, US, 46899	f	0	0	0	\N	\N
284	5651815694543	Troy	Pourmoghadam	aroundtheclocklocksmith@gmail.com	+18435722220	Around The Clock Locksmith	PO Box 1210, Mount Pleasant, SC, US, 29465	f	0	0	0	\N	\N
285	5611519541455	alex	velk	alex.lockguys77@gmail.com		the lockguys	417 North Glenwood Avenue, Dalton, GA, US, 30721	f	0	0	0	\N	\N
286	5607155499215	juan	de la torre	juandelatorre@msn.com			1715 Heavenly Way, Ceres, CA, US, 95307	f	0	0	0	\N	\N
287	5598527226063	Gregory	Breaux	breauxgregory@gmail.com			3414 Patrick Street, Lake Charles, LA, US, 70605	f	0	0	0	\N	\N
288	5583021015247	KEITH	TAYLOR	onestopremotes@yahoo.com	+19017349479		1406 Mount Sinai Rd, byhalia, MS, US, 38611	f	0	0	0	\N	\N
289	5578349576399	Jotak	Jack	jack@calikeyslocksmith.com		Cali Keys	9657 Philta Way, Elk Grove, CA, US, 95757	f	0	0	0	\N	\N
290	5496619729103	Mike	Laughridge	elitekeysolutions@gmail.com		Elite Key Solutions	1553 North Milwaukee Street #320, Boise, ID, US, 83704	f	0	0	0	\N	\N
292	5357060653263	VADIM	POZDNYAKOV	vadon777@gmail.com		locksmith for you	175 7th Street, Wheeling, IL, US, 60090	f	0	0	0	\N	\N
293	5357060620495	Marti	hook	mhooktechmonkey@yahoo.com			3535 Fergus Road, Burt, MI, US, 48417	f	0	0	0	\N	\N
294	5357058851023	Kevin	Ahrens	drevkev@gmail.com	+18474528856		419 Clearview Avenue, Wauconda, IL, US, 60084	f	0	0	0	\N	\N
295	5357052002511	Erez	meoded	erezm5032@gmail.com			680 Marilyn Ave 205, Glendale Heights, IL, US, 60139	f	0	0	0	\N	\N
296	5357049643215	JAMES	SIEMSEN	arlingtonlock44@aol.com	+18473986650	Arlington Lock	1517 North Fernandez Place, Arlington Heights, IL, US, 60004	f	0	0	0	\N	\N
297	5357048660175	Jason	Courtney	locdoc6@gmail.com			417 W Clifton Ave, Sioux City, IA, US, 51104	f	0	0	0	\N	\N
277	5683307315407	Kyle	Elliott	kyle@nwalocks.com		Discount Locksmith	1470 Lexington Circle, Springdale, AR, US, 72762	t	0	0	0	\N	\N
257	5994794418383	David	Aguilar	aguilalock@gmail.com	+12055164483		7533 Misty Lane, Pinson, AL, US, 35126	t	0	0	0	\N	\N
260	5973162721487	carlos	barquera	candslocksmiths950@gmail.com	+15203597284		1435 W Prince Rd, Tucson, AZ, US, 85705-3013	t	0	0	0	\N	\N
251	6042489716943	Juan	Meraz	chiefsafeandlock@gmail.com	+15122070809	Dickens Locksmith	47 State Highway 150 Loop DICKENS LOCKSMITH, Bastrop, TX, US, 78602	f	0	0	0	\N	\N
272	5897791996111	Thomas	Kadous	itsallgoodatthebeach1212@gmail.com			1212 violet st, Atlantic beach, FL, US, 32233	f	0	0	0	\N	\N
291	5459671580879	Leigh	Doucette	lockmasters@shaw.ca	+14038888739	Lockmasters Inc	22 Chapalina Way Southeast, Calgary, AB, CA, T2X 3P1	t	0	0	0	\N	\N
299	5317092376783	Freddy	Laque	mykeyguys@yahoo.com	+13372240443	My Key Guys	116 Tolmark Rd, Duson, LA, US, 70529	f	0	0	0	\N	\N
300	5310274240719	David	Green	oglock1975@gmail.com	+12283241735	Orange Grove Lock and Key	12302 Cold Springs Rd, Gulfport, MS, US, 39503	f	0	0	0	\N	\N
301	5309421027535	Shawn	Coats	joplinlockandkey@gmail.com	+14175294999	Joplin Lock & Key LLC	2625 East 11th Street, Joplin, MO, US, 64801	f	0	0	0	\N	\N
302	5276515533007	jerry	woods	ugcycles@yahoo.com	+15743102274		56941 gurensey av, Osceola, IN, US, 46561	f	0	0	0	\N	\N
303	5268570112207	David	Briscoe	palmanager83@gmail.com	+13373494957	Pop-A-Lock Lake Charles	Po box 238, Carencro, LA, US, 70520	f	0	0	0	\N	\N
305	5213953229007	Kevin	Dixon	krddixon@yahoo.com	+19012183481		5609 Millers Cove, Memphis, TN, US, 38125	f	0	0	0	\N	\N
307	5185540751567	Kyle	Grubb	surelockandkey1960@gmail.com	+13143982282	Sure Lock & Key	11019 Manchester Rd, Kirkwood, MO, US, 63122	f	0	0	0	\N	\N
172	6173883498703	Mark	Crawford	professionalsafeandlock@gmail.com		Professional Safe & Lock	3495 Lakeside dr  #183, Reno, NV, US, 89509	f	0	0	0	\N	SEkeys5
263	5955483730127	Cam	Coulter	locksmithshop@gmail.com		dependable lock	2 Cherokee Avenue, Nashua, NH, US, 03062	f	0	0	0	\N	SEkeys17
253	6038364291279	Dylan	Hite	carkeysofwilmington@gmail.com		Car keys of wilmington	4485 nc Highway 53 w, Burgaw, NC, US, 28425	f	0	0	0	\N	SEkeys14
16	6293850521807	John	Stewart	autotkeys203@yahoo.com		The LockGuys of Thomaston	1434 U.S. 19, Thomaston, GA, US, 30286	f	0	0	0	\N	SEkeys16
131	6206242390223	Jake	Anderson	gjanderson@onekeysource.com			1282 Town Creek Rd, Eden, NC, US, 27288	f	0	0	0	\N	SEkeys28
308	6336861962447	John	Lapinski	littlejohnny201@gmail.com			3 Boss Rd, Foster, RI, US, 02825	f	0	0	0	\N	JohnLapinski-OEM854
309	6336635207887	Asher	Perez	oshriperez@gmail.com			6308 Knob Hill Drive, Virginia Beach, VA, US, 23464	f	0	0	0	\N	AsherPerez-OEM854
311	6325047361743	Michael	Clark	mclarkinc@hotmail.com			938 E Swan Creek Road East 223, Fort Washington, MD, US, 20744	f	0	0	0	\N	
312	6321747394767	Gerald	Herrera	jrlocksmith305@gmail.com			13 Northwest 108th Court, Miami, FL, US, 33172	f	0	0	0	\N	
315	6302178869455	hillel	goral	buffalock@gmail.com			2713 main st, buffalo, NY, US, 14214	f	0	0	0	\N	
317	6295159472335	Brianne	Williams	hooknbooktowingkc@gmail.com			9017 E 35th St, Kansas City, MO, US, 64129	f	0	0	0	\N	
318	6282388865231	Kolade	Akinyemi	akinyemi7@icloud.com			PO Box 35013, St Petersburg, FL, US, 33705-0501	f	0	0	0	\N	
319	6280475705551	Jon-Erik	Balagot	work.balagot@gmail.com			38680 Fairfield Heights, Murrieta, CA, US, 92563	f	0	0	0	\N	
320	6277820809423	Nadav	Pahan	nadavpahann@gmail.com			9229 W Magic Flower Ave, Las Vegas, NV, US, 89134	f	0	0	0	\N	
321	6276156063951	Sergio	Ponce De Leon	sergiopdl99@gmail.com			2011 West Katella Avenue #46 gate code #1974, Anaheim, CA, US, 92804	f	0	0	0	\N	
322	6275986227407	liran	nudelman	liransys@gmail.com			19516 Enadia Way, reseda, CA, US, 91335	f	0	0	0	\N	
324	6273308491983	Francisco	Ramirez	denverautolock@gmail.com			11694 E Cedar Ave, Aurora, CO, US, 80012	f	0	0	0	\N	
325	6271357321423	Julio	Sotomayor	keysanddiagnostics@gmail.com			33650 Abbey Rd, Temecula, CA, US, 92592	f	0	0	0	\N	
326	6260485390543	Nicholas	Lopez	nickylocks@yahoo.com			1423 Capri Lane #3908, Weston, FL, US, 33326-4025	f	0	0	0	\N	
328	6252137677007	Robert	Grant	lockrob@att.net			14752 sw 60 st, miami, FL, US, 33193	f	0	0	0	\N	
206	6147672899791	Nizan	Zuqert	nizuq1992@gmail.com			9320 Otis avenue Apartment 2422, Indianapolis, IN, US, 46216	f	0	0	0	\N	
341	5357049839823	Randy	Mize	mize.r@sbcglobal.net	+13145033151		367 Hickory Spring Lane, Union, MO, US, 63084	f	0	0	0	\N	
342	5357049348303	shannon	kameron	skameron@buckeye-express.com	+14197541972		2118 Stoneybrook Ln., TEMPERANCE, MI, US, 48182	f	0	0	0	\N	shannonkameron-OEM854
344	5247925059791	Phillip	Slay	phillip@southeasternkeys.com	+14705042724		1536 EDEN VIEW CIRCLE, HOOVER, AL, US, 35244	f	0	0	0	\N	
4	6311957070031	Marcos	Escobar	diiem0993@gmail.com		DALE Lockmsmith	18241 East Flora Place Unit F, Aurora, CO, US, 80013	f	0	0	0	\N	\N
72	6244941365455	Shimon	Avitan	locksmith4hire@gmail.com		Adanced Lock and Key	23121 Greenlawn Avenue, Beachwood, OH, US, 44122	f	0	0	0	\N	Adanced Lock and KeyShimon Avitan-OEM854
29	6274252636367	Mark	Fairman	nichole83pa@yahoo.com			422 west Dubois Ave, Dubois, PA, US, 15801	f	0	0	0	\N	\N
298	5357047414991	Jose	Hernandez	jose@omegalocksmith.com			4915 s long ave, Chicago, IL, US, 60638-1731	f	0	0	0	\N	\N
345	5188310794447	Abby	Hoskinson	abigail@5starlockandkey.com	+13373848233		542 Rue Carnot, LA, 70520, US	t	0	0	0	\N	\N
346	5357057474767	Samuel	Nunez	sam@oliphantlock.com				t	0	0	0	\N	\N
306	5204477837519	Joel	Broussard	joel@lafayettelocksmith.com	+13372889515	Lafayette	411 East Kaliste Saloom Road, Lafayette, LA, US, 70508	t	0	0	0	\N	\N
340	5752379310287	adam	shurden	adam@spartansecurityllc.com			102 Layton Rd, Collins, MS, US, 39428	t	0	0	0	\N	
349	5885083451599	Barry	Starer	bearslock@gmail.com			203 Riveredge Dr, PA, 17540-9745, US	t	0	0	0	\N	\N
304	5258011803855	Tom	Robertson	tom@a5starlocksmith.com			2606 Dogwood Circle, Hartselle, AL, US, 35640	t	0	0	0	\N	\N
350	5966066778319	Bruce	Horne	aaaakeylocksmith@gmail.com			4418 Willowbend Blvd, TX, 77035, US	t	0	0	0	\N	\N
351	5377408696527	Jeremy	Moncrief	jeremymoncrief@yahoo.com			3235 Kerri Drive, AL, 35004, US	t	0	0	0	\N	\N
352	5554950176975	Curtis	Whitson	columzrus@sbcglobal.net			3586 N. Vernal, CA, 93722, US	t	0	0	0	\N	\N
353	5657701384399	Nizan	Zuqert	o.muery@gmail.com			9320 Otis Ave, 2422, IN, 46216, US	t	0	0	0	\N	\N
310	6332536520911	gilad	abizdris	abizdris@gmail.com			3001 Northrop Avenue 3001 northrop ave, Sacramento, CA, US, 95864	t	0	0	0	\N	
354	5657738608847	Roberto	Rivera	rgvkeypro@gmail.com			4 Uruapan Ct, TX, 78526, US	t	0	0	0	\N	\N
355	6071485530319	Michael	Grobowsky	elitetechkey@gmail.com			1702 West McCarty Lane, TX, 78666, US	t	0	0	0	\N	\N
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
7cb7a414-4b6b-4f10-8afb-5b7ce2a78c90	e58422871f63904c640327d4453f5530fc6a5f74ef5952024804116878b57402	2025-06-16 15:32:26.24169+00	20250616153225_init	\N	\N	2025-06-16 15:32:26.190713+00	1
9d52ac1b-3841-4f79-bb2d-f5b911daa5a6	4d870d3139dc5550f9fe1c75c80946f224db1fbc795118726c58daf9293b10a5	2025-06-16 16:18:22.473873+00	20250616161821_take2	\N	\N	2025-06-16 16:18:22.464482+00	1
1ca89aad-8f2a-41ec-a889-7d4eb51a980b	fca92699df1cf06bd3803ee8a70f4e705dc9c1c5f439e170f4ba38cc0b8adadb	2025-06-16 17:59:18.301635+00	20250616175917_init	\N	\N	2025-06-16 17:59:18.260483+00	1
992fc8bc-c696-4953-a08d-62e99c24d82b	2e55cac628621bbffbb369ad1caf0396d30afcd7f28b07c506c2a4444a2a092c	2025-06-24 14:52:22.604938+00	20250624145222_init	\N	\N	2025-06-24 14:52:22.559016+00	1
6ee33acf-3f6e-4c30-b3cb-2842ec6f6eaa	2af875ff84ba0d297edd9c18eda8fd1c2d44ea875390725e88d41bf8d964b7d1	2025-06-27 14:57:54.526053+00	20250627145753_init	\N	\N	2025-06-27 14:57:54.47536+00	1
5766a430-eb60-4079-8493-1801a556d4a7	5bd3e6b81e94e863d38a42103460cfa61a26b331241b4cddd50aa025a4b32107	2025-06-30 14:18:50.666655+00	20250630141849_init	\N	\N	2025-06-30 14:18:50.648337+00	1
\.


--
-- Name: FordName_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FordName_id_seq"', 24, true);


--
-- Name: Token_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Token_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 355, true);


--
-- Name: FordName FordName_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FordName"
    ADD CONSTRAINT "FordName_pkey" PRIMARY KEY (id);


--
-- Name: Token Token_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Token"
    ADD CONSTRAINT "Token_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: FordName_HWID_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "FordName_HWID_key" ON public."FordName" USING btree ("HWID");


--
-- Name: FordName_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "FordName_name_key" ON public."FordName" USING btree (name);


--
-- Name: Token_orderNumber_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Token_orderNumber_key" ON public."Token" USING btree ("orderNumber");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_shopifyId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_shopifyId_key" ON public."User" USING btree ("shopifyId");


--
-- Name: FordName FordName_ownerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FordName"
    ADD CONSTRAINT "FordName_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Token Token_ownerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Token"
    ADD CONSTRAINT "Token_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

