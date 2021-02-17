package com.colors.services.dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;
import org.springframework.util.LinkedCaseInsensitiveMap;

import com.colors.services.bean.Color;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor(onConstructor_ = {@Autowired})
public class ColorsDAOImpl implements ColorsDAO {

	private JdbcTemplate jdbcTemplate;

	@Override
	@SuppressWarnings("unchecked")
	public List<Color> listadoColores(Integer id) {

		List<Color> lista = new ArrayList<>();

		SimpleJdbcCall simpleJdbcCall = new SimpleJdbcCall(jdbcTemplate).withProcedureName("LISTADO_COLORES");

		SqlParameterSource in = new MapSqlParameterSource().addValue("idColor",id);
		Map<String, Object> out = simpleJdbcCall.execute(in);

	
		List<LinkedHashMap<String, Object>> lTemp = (List<LinkedHashMap<String, Object>>) out.get("#result-set-1");

		Iterator itr = lTemp.iterator();
		
		if(id==null){

			while (itr.hasNext()) {
				
				LinkedCaseInsensitiveMap x = (LinkedCaseInsensitiveMap) itr.next();
				Color c = new Color();
				c.setId((int) x.get("id"));
				c.setName((String) x.get("name"));
				c.setColor((String) x.get("color"));
				lista.add(c);
			}
		}
		else {
			while (itr.hasNext()) {
				
				LinkedCaseInsensitiveMap x = (LinkedCaseInsensitiveMap) itr.next();
				Color c = new Color();
				c.setId((int) x.get("id"));
				c.setName((String) x.get("name"));
				c.setYear((int) x.get("year"));
				c.setColor((String) x.get("color"));
				c.setPantoneValue((String) x.get("pantone_value"));
				lista.add(c);
			}
		}

		return lista;
	}



}
