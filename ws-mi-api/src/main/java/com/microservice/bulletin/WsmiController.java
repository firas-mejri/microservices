package com.microservice.bulletin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WsmiController {
	
	@Autowired
	private WsmiService wsmiService;
	
	@RequestMapping("/bulletins")
	public List<Bulletin> getAllBulletins(){
		
		return wsmiService.getAllBulletins();
	}
	
	@RequestMapping("/bulletins/{id}")
	public Bulletin getBulletinById(@PathVariable int id) {
		Bulletin tmp;
		Bulletin empty = new Bulletin("","","",0,"");
		tmp = wsmiService.getBulletinById(new Integer(id));
		if (tmp == null) {
			return empty;
		} else {
			return tmp;
		}
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/bulletins")
	public void addBulletin(@RequestBody Bulletin bulletin) {
		
		wsmiService.addBulletin(bulletin);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/bulletins/{id}")
	public void updateBulletin(@RequestBody Bulletin bulletin, @PathVariable int id) {
		
		wsmiService.updateBulletin(bulletin, new Integer(id));
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/bulletins/{id}")
	public void deleteBulletin(@PathVariable int id) {
		
		wsmiService.deleteBulletin(new Integer(id));
		
	}

}
